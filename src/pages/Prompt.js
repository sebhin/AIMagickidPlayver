import React, { useState, useEffect, useRef } from 'react';
import '../styles/Prompt.scss';
import Navigation from '../components/Navigation';
import Writing from '../components/Writing';
import Result from '../components/Result';
import Draw from '../components/Draw';
import PromptGuide from '../components/PromptGuide';
import PromptGuideImg from '../components/PromptGuideImg';
import PromptDiscussionBox from '../components/PromptDiscussionBox';
import CompleteModal from '../components/CompleteModal';
import { useNavigate, useParams } from 'react-router-dom';

import { getTrainingInfo, callChatGPT, callFalAI } from '../api/ClassAPI';
import { saveCreation } from '../api/WorkAPI';

// 2024-01-24 | LongLoading으로 기본 로딩창 변경
import Loading from '../components/LongLoading';
import ErrorModal from '../components/ErrorModal';
import DiscussionModal from '../components/DiscussionModal';
import Floating from '../components/Floating';

const Prompt = () => {
    const USER_ID = localStorage.getItem('userID');
    const USER_NAME = localStorage.getItem('userName');

    const { trainingId, trainingType } = useParams();
    const [currentData, setCurrentData] = useState(null);
    const [AIResult, setAIResult] = useState(null);
    const [AIResultList, setAIResultList] = useState([]);

    const [selected, setSelected] = useState(null);
    // 선택된 항목 배열로 관리
    const [selectedItems, setSelectedItems] = useState([]);
    // PromptDiscussionBox 표시 여부 결정
    const [showPromptDiscussionBox, setShowPromptDiscussionBox] =
        useState(false);
    const [showDiscussionModal, setShowDiscussionModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showComplete, setShowComplete] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // 오디오 요소에 대한 참조 생성
    const writingAudioRef = useRef(null);
    const drawingAudioRef = useRef(null);

    // 2024-01-24 | useNavigate
    const navigation = useNavigate();

    useEffect(() => {
        callTrainingInfoAPIFunc(trainingType, trainingId);
    }, []);

    const callTrainingInfoAPIFunc = async (training_type, training_id) => {
        const response = await getTrainingInfo(training_type, training_id);

        if (response.success) {
            console.log('result: ', response.data);

            if (training_type == 'writing') {
                setCurrentData(response.data);
                const initialSelected = {};
                response.data.training_prompt_json.selection_list.forEach(
                    (categoryData) => {
                        console.log(categoryData);
                        initialSelected[categoryData.category] =
                            categoryData.selection.reduce((acc, item) => {
                                acc[item] = false;
                                return acc;
                            }, {});
                    }
                );
                setSelected(initialSelected);
            } else if (training_type == 'drawing') {
                setCurrentData(response.data);
            }
        } else {
            console.log(response.error.errMsg);
        }
    };

    // 사용자 선택 처리하는 함수. setSelectedItems -> 상태 업데이트
    const handleSelectionChange = (new_selection) => {
        setSelectedItems(new_selection);
        console.log('Poem에서 선택한 값 배열', selectedItems);
    };

    const extractSelectedText = () => {
        const selectedTexts = [];
        for (const category in selected) {
            const selection = selected[category];
            for (const item in selection) {
                if (selection[item]) {
                    selectedTexts.push(item);
                }
            }
        }
        return selectedTexts;
    };

    // Run버튼 클릭 시 PromptDiscussionBox 보이게 처리
    const handleRunClick = async () => {
        setShowLoading(true);
        const selectedItems = extractSelectedText();
        console.log('선택된 항목들:', selectedItems);
        selectedItems.unshift(USER_NAME); // 배열 맨 앞에 추가
        console.log('new selectedItems:', selectedItems);
        let body = {
            prompt: selectedItems,
        };
        console.log('prompt => ', prompt);
        const response = await callChatGPT(
            USER_ID,
            trainingType,
            trainingId,
            body
        );
        if (response.success) {
            if (writingAudioRef.current) {
                writingAudioRef.current.play().catch((error) => {
                    console.error('오디오 재생에 실패했습니다.', error);
                });
            }
            const reulst = response.data.replace(/"/g, '');
            console.log('chatgpt => ', reulst);
            setAIResult(reulst);
            setAIResultList((prev) => [...prev, reulst]);
            setShowLoading(false);
            setShowPromptDiscussionBox(true);
        } else {
            setShowLoading(false);
            console.log(response.error.errMsg);
            if (response.error.errCode === 'Magicbean_ERR_00') {
                setShowErrorModal(true);
                setErrorMessage(response.error.errMsg);
            }
        }
    };

    const handleMakeButtonClick = async (selectedOptions) => {
        setShowLoading(true);
        console.log('선택된 옵션들:', selectedOptions);

        const prompt = [];
        const regex = /선택지\d+_en$/; // '선택지n_en' 형태의 키를 찾는 정규 표현식

        for (const key in selectedOptions) {
            if (regex.test(key)) {
                prompt.push(selectedOptions[key]);
            }
        }

        let body = {
            prompt,
        };
        console.log('prompt => ', body);
        const response = await callFalAI(
            USER_ID,
            trainingType,
            trainingId,
            body
        );
        if (response.success) {
            console.log('callFalAI => ', response.data);
            setTimeout(() => {
                setAIResult(response.data[0].url);
                setAIResultList((prev) => [...prev, response.data[0].url]);
                console.log(AIResultList);
                if (drawingAudioRef.current) {
                    drawingAudioRef.current.play().catch((error) => {
                        console.error('오디오 재생에 실패했습니다.', error);
                    });
                }
                setShowLoading(false);
                setShowPromptDiscussionBox(true);
            }, 20000); // 20000ms = 20초
        } else {
            console.log(response.error.errMsg);
            console.log(response.error);
            setShowLoading(false);
            if (response.error.errCode === 'Magicbean_ERR_00') {
                setShowErrorModal(true);
                setErrorMessage(response.error.errMsg);
            }
        }
    };

    // const handleAllOptionsSelected = (isSelected) => {
    //     setShowPromptDiscussionBox(isSelected);
    // };

    const handleSaveButtonClick = async (selectedResult) => {
        console.log('selectedResult: ', selectedResult);
        setShowLoading(true);

        let creation_title = currentData.training_topic_title;

        const response = await saveCreation(
            USER_ID,
            trainingType,
            creation_title,
            selectedResult,
            trainingId
        );
        if (response.success) {
            console.log('Save => ', response.data);
            setShowLoading(false);
            setShowComplete(true);
        } else {
            console.log(response.error);
            setShowLoading(false);
        }
    };

    // 2024-01-24 | 목록으로 버튼 클릭 시 promptCategory 페이지로 이동
    const handlePromptCategory = () => {
        navigation(`/promptcategory/${trainingType}`);
    };

    return (
        <>
            <div className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                {currentData && (
                    <div className="right-contents prompt">
                        {showLoading && <Loading type={trainingType}></Loading>}
                        {showErrorModal && (
                            <ErrorModal
                                error_message={errorMessage}
                                onClose={() => setShowErrorModal(false)}
                            ></ErrorModal>
                        )}
                        {showComplete && (
                            <CompleteModal
                                user_name={USER_NAME}
                                onClose={() => setShowComplete(false)}
                            ></CompleteModal>
                        )}
                        {showDiscussionModal && (
                            <DiscussionModal
                                discussion_topic={currentData.discussion_topic}
                                discussion_example={
                                    currentData.discussion_example
                                }
                                onClose={() => setShowDiscussionModal(false)}
                            />
                        )}

                        <div className="inner">
                            {showPromptDiscussionBox && (
                                <PromptDiscussionBox
                                    discussion_topic={
                                        currentData.discussion_topic
                                    }
                                    openModal={() =>
                                        setShowDiscussionModal(true)
                                    }
                                />
                            )}
                            <div className="tit-container">
                                <h3 className="tit">
                                    어떤 주제로 만들어볼까요?
                                </h3>
                                <div className="topic-container">
                                    <p className="topic">
                                        {currentData.training_topic_title}
                                    </p>
                                    <button onClick={handlePromptCategory}>
                                        <figure>
                                            <img
                                                src={'/images/burger.svg'}
                                                alt="list"
                                            />
                                        </figure>
                                        <span>목록</span>
                                    </button>
                                </div>

                                {trainingType === 'writing' && (
                                    <PromptGuide
                                        description={
                                            currentData.training_description
                                        }
                                    />
                                )}
                                {trainingType === 'drawing' && (
                                    <PromptGuideImg
                                        img={currentData.training_image}
                                        description={
                                            currentData.training_description
                                        }
                                    />
                                )}
                            </div>

                            {/* <PromptGuideImg /> */}
                            <div className="prompt-container">
                                {trainingType === 'writing' && selected && (
                                    <>
                                        <audio
                                            ref={writingAudioRef}
                                            src="/audio/twinkle-writing.mp3"
                                        />
                                        <Writing
                                            writingData={
                                                currentData.training_prompt_json
                                                    .selection_list
                                            }
                                            selected={selected}
                                            setSelected={setSelected}
                                            onRunClick={handleRunClick}
                                        />
                                    </>
                                )}

                                {trainingType === 'drawing' && (
                                    <>
                                        <audio
                                            ref={drawingAudioRef}
                                            src="/audio/twinkle-drawing.mp3"
                                        />
                                        <Draw
                                            drawMockData={
                                                currentData.training_prompt_json
                                            }
                                            onMakeButtonClick={
                                                handleMakeButtonClick
                                            }
                                        />
                                    </>
                                )}
                                <div className="divide-line"></div>
                                {AIResult && (
                                    <Result
                                        type={trainingType}
                                        result={AIResult}
                                        resultList={AIResultList}
                                        onResult={handleSaveButtonClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {/* 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                <Floating />
            </div>
        </>
    );
};

export default Prompt;
