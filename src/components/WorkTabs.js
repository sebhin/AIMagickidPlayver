import React, { useEffect, useState, useRef } from 'react';
import '../styles/WorkTabs.scss';
import WideViewModal from '../components/WideViewModal';
import WritingDetailModal from './WritingDetailModal';
import DrawingList from './DrawingList';
import WritingList from './WritingList';
import { getUserCreationList, getSchoolCreationList } from '../api/WorkAPI';
import ContestConts from './ContestConts';
import StorybookList from './StorybookList';

const WorkTabs = ({ page_type }) => {
    const USER_ID = localStorage.getItem('userID');
    const IS_TEACHER = localStorage.getItem('isTeacher') === 'true';
    const story4uURL = process.env.REACT_APP_STORY4U_URL;
    const story4uPort = process.env.REACT_APP_STORY4U_PORT;

    const [activeTab, setActiveTab] = useState('drawing'); // tab active
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태
    const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지
    const [selectedWriting, setSelectedWriting] = useState(null); // 선택된 글
    const [randomImage, setRandomImage] = useState(''); // 랜덤 이미지
    const [writingModalOpen, setWritingModalOpen] = useState(false); // 글 상세 모달 상태

    const [creationList, setCreationList] = useState([]); // tab active
    const [selectedOption, setSelectedOption] = useState('최신순');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const openWritingModal = () => {
        setWritingModalOpen(true);
    };

    // writing-paper 랜덤 이미지 리스트
    const imageList = [
        '/images/poem-paper-blue.svg',
        '/images/poem-paper-red.svg',
        '/images/poem-paper-green.svg',
        '/images/poem-paper-yellow.svg',
    ];

    // 랜덤 이미지 생성
    const selectRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        setRandomImage(imageList[randomIndex]);
    };

    const callCreationListAPI = async () => {
        let result;
        if (page_type === 'my') {
            result = await getUserCreationList(USER_ID, activeTab);
        } else if (page_type === 'school') {
            result = await getSchoolCreationList(USER_ID, activeTab);
        }

        if (result.success) {
            console.log(result.data);
            setCreationList(result.data);
        } else {
            console.error(result.data);
        }
    };

    // 컴포넌트 마운트 시 랜덤 이미지 선택
    useEffect(() => {
        if (activeTab === 'storybook') {
            alert('곧 오픈될 예정입니다.');
            // const params = { userID: USER_ID, userName: USER_NAME }
            // const query = new URLSearchParams(params).toString();
            // window.open(`${story4uURL}:${story4uPort}/myStorybook?${query}`, '_blank', 'noopener,noreferrer');
        }
        selectRandomImage();
        callCreationListAPI();
        setSelectedOption('최신순');
    }, [activeTab]);

    useEffect(() => {
        // 새로운 정렬된 리스트를 계산
        const sortedList = [...creationList].sort((a, b) => {
            return selectedOption === '최신순'
                ? b.creation_id - a.creation_id
                : a.creation_id - b.creation_id;
        });

        // 정렬된 리스트로 상태 업데이트
        setCreationList(sortedList);
    }, [selectedOption]);

    // 선택된 탭 active
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // 모달 열기
    const openModal = (result) => {
        if (activeTab === 'writing') {
            setSelectedWriting(result);
            setWritingModalOpen(true);
        } else if (activeTab === 'drawing') {
            setSelectedImage(result);
            setModalOpen(true);
        }
    };

    return (
        <>
            <div className="toggle-btn-list">
                <p className="made-title">
                    {page_type === 'my' ? '내가만든' : '우리학교 친구들이 만든'}
                </p>
                <button
                    onClick={() => {
                        handleTabClick('drawing');
                    }}
                    className={`btn toggle-btn ${
                        activeTab === 'drawing' ? 'active' : ''
                    }`}
                >
                    그림
                </button>
                <button
                    onClick={() => {
                        handleTabClick('writing');
                    }}
                    className={`btn toggle-btn ${
                        activeTab === 'writing' ? 'active' : ''
                    }`}
                >
                    글
                </button>
                <button
                    onClick={() => {
                        handleTabClick('storybook');
                    }}
                    className={`btn toggle-btn ${
                        activeTab === 'storybook' ? 'active' : ''
                    }`}
                >
                    창작동화
                </button>
            </div>
            <select
                className="selectbox"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="최신순">최신순</option>
                <option value="오래된 순">오래된 순</option>
            </select>

            <div className="tab-contents">
                {activeTab === 'drawing' &&
                    ((page_type === 'my' && (
                        <DrawingList
                            creationList={creationList}
                            openModal={openModal}
                        />
                    )) ||
                        (page_type === 'school' && (
                            <ContestConts
                                creationList={creationList}
                                openModal={openModal}
                            />
                        )))}
                {activeTab === 'writing' && (
                    <WritingList
                        creationList={creationList}
                        randomImage={randomImage}
                        openModal={openModal}
                        page_type={page_type}
                    />
                )}
                {/* {activeTab === 'storybook' && <StorybookList />} */}
                {/* {activeTab === 'storybook' && alert("곧 오픈될 예정입니다.")} */}
            </div>
            {modalOpen && (
                <WideViewModal
                    image={selectedImage}
                    onClose={() => setModalOpen(false)}
                    checkPrint={IS_TEACHER}
                />
            )}
            {writingModalOpen && (
                <WritingDetailModal
                    text={selectedWriting}
                    onClose={() => setWritingModalOpen(false)}
                    checkPrint={IS_TEACHER}
                />
            )}
        </>
    );
};

export default WorkTabs;
