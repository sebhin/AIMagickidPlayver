import React, { useState, useEffect } from 'react';
import '../styles/ClassDetail.scss';
import Navigation from '../components/Navigation';
import LessonBox from '../components/LessonBox';
import TrainingBox from '../components/TrainingBox';
import DiscussionModal from '../components/DiscussionModal';
import { useNavigate, useParams } from 'react-router-dom';

import { getLessonContentJSON } from '../api/ClassAPI';
import Floating from '../components/Floating';

const ClassDetail = () => {
    const { lessonId } = useParams();
    console.log(`레슨아이디: ${lessonId}`);

    // 2024-01-29 | navigate 추가
    const navigate = useNavigate();

    const [showDiscussionModal, setShowDiscussionModal] = useState(false);
    const [stepInfo, setStepInfo] = useState(null);
    const [lessonBoxData, setLessonBoxData] = useState(null);
    const [trainingBoxData, setTrainingBoxData] = useState(null);
    const [discussionBoxData, setDiscussionBoxData] = useState(null);

    useEffect(() => {
        callLessonContentJsonAPIFunc(lessonId);
    }, []);

    const callLessonContentJsonAPIFunc = async (lesson_id) => {
        const response = await getLessonContentJSON(lesson_id);

        if (response.success) {
            console.log('@@@@=> ', response.data);
            setStepInfo({
                step: response.data.step,
                step_title: response.data.step_title,
            });
            setLessonBoxData(response.data.content_json.lesson_box);
            setTrainingBoxData(response.data.content_json.training_box);
            setDiscussionBoxData({
                discussion_topic: response.data.discussion_topic,
                discussion_example: response.data.discussion_example,
            });
        } else {
            console.log(response.error.errMsg);
        }
    };

    const handleShowDebateModal = () => {
        setShowDiscussionModal(true);
    };

    const handleCloseDebateModal = () => {
        setShowDiscussionModal(false);
    };

    // 2024-01-29 | navigate 추가
    const handleClassCategory = () => {
        navigate(`/class`);
    };

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents class-detail">
                    <div className="inner">
                        {/* 2024-01-29 | 목록으로 가는 버튼 추가 */}
                        <div className="list-tit-container">
                            <h3 className="tit">
                                {stepInfo && (
                                    <>
                                        {stepInfo.step}장 .{' '}
                                        <em>{stepInfo.step_title}</em>
                                    </>
                                )}
                            </h3>
                            <button onClick={handleClassCategory}>
                                <figure>
                                    <img
                                        src={'/images/burger.svg'}
                                        alt="list"
                                    />
                                </figure>
                                <span>목록</span>
                            </button>
                        </div>

                        <div className="teaching-container">
                            {/* <LessonBox lessonData={lessonJsonData} /> */}
                            {lessonBoxData && (
                                <LessonBox lessonData={lessonBoxData} />
                            )}
                            <div className="divide-line"></div>
                            <div className="training-container">
                                {trainingBoxData && (
                                    <TrainingBox
                                        trainingData={trainingBoxData}
                                    />
                                )}
                                <div className="discussion">
                                    <p className="todays-discussion">
                                        오늘의 토의 주제
                                    </p>
                                    <div
                                        className="btn show-discussion"
                                        onClick={handleShowDebateModal}
                                    >
                                        토의주제 보기
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                {/* <Floating /> */}
            </section>
            {showDiscussionModal && (
                <DiscussionModal
                    discussion_topic={discussionBoxData.discussion_topic}
                    discussion_example={discussionBoxData.discussion_example}
                    onClose={handleCloseDebateModal}
                />
            )}
        </>
    );
};

export default ClassDetail;
