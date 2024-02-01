import React, { useEffect, useState } from 'react';
import '../styles/AllContest.scss';
import Navigation from '../components/Navigation';
import ContestConts from '../components/ContestConts';
import WritingDetailModal from '../components/WritingDetailModal';
import WideViewModal from '../components/WideViewModal';
import { getSchoolCreationList } from '../api/WorkAPI';

const AllContest = () => {
    const USER_ID = localStorage.getItem('userID');

    const [activeTab, setActiveTab] = useState('drawing'); // tab active

    const [modalOpen, setModalOpen] = useState(false); // 이미지 크게보기 모달 상태

    const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지

    const [randomImage, setRandomImage] = useState(''); // writing-paper 이미지 랜덤

    const [writingModalOpen, setWritingModalOpen] = useState(false); // 글 상세 보기 모달 상태

    // writing-paper 랜덤 이미지 리스트
    const imageList = [
        '/images/poem-paper-blue.svg',
        '/images/poem-paper-red.svg',
        '/images/poem-paper-green.svg',
        '/images/poem-paper-yellow.svg',
    ];

    // writingModal Open
    const openWritingModal = () => {
        setWritingModalOpen(true);
    };

    // 이미지 선택
    const handleImageClick = (imagePath) => {
        setSelectedImage(imagePath);
        setModalOpen(true);
    };

    // 랜덤 이미지 생성
    const selectRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        setRandomImage(imageList[randomIndex]);
    };

    // 선택된 tab active
    const handleTabClick = async (tab) => {
        setActiveTab(tab);
        // getSchoolCreationList
    };

    // 컴포넌트 마운트 시 랜덤 이미지 선택
    useEffect(() => {
        selectRandomImage();
    }, []);

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents contest">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">작품 모아보기</h3>
                            <form className="search-form">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="검색어를 입력하세요."
                                />
                                <input
                                    type="submit"
                                    value="검색"
                                    className="submit-btn"
                                />
                            </form>
                        </div>
                        <div className="toggle-btn-list">
                            <button
                                className={`btn toggle-btn ${
                                    activeTab === 'drawing' ? 'active' : ''
                                }`}
                                onClick={() => {
                                    handleTabClick('drawing');
                                }}
                            >
                                그림
                            </button>
                            <button
                                className={`btn toggle-btn ${
                                    activeTab === 'writing' ? 'active' : ''
                                }`}
                                onClick={() => {
                                    handleTabClick('writing');
                                }}
                            >
                                글
                            </button>
                            <button
                                className={`btn toggle-btn ${
                                    activeTab === 'storybook' ? 'active' : ''
                                }`}
                                onClick={() => {
                                    handleTabClick('storybook');
                                }}
                            >
                                동화
                            </button>
                        </div>
                        <div className="tab-contents">
                            {/* {activeTab === 'drawing' && (
                                <ul className="all-contest-list">
                                    <ContestConts
                                        onImageClick={handleImageClick}
                                    />
                                </ul>
                            )}
                            {activeTab === 'writing' && (
                                <ul className="writing-list">
                                    <li
                                        className="writing"
                                        onClick={openWritingModal}
                                    >
                                        <figure className="paper">
                                            <img
                                                src={randomImage}
                                                alt="writing-paper"
                                            />
                                        </figure>
                                        <div className="writing-txt">
                                            <h2 className="writing-tit">
                                                별빛 아래 꿈꾸는 나무
                                            </h2>
                                            <p className="peom-create-date">
                                                2023.12.14
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            )}
                            {activeTab === 'storybook' && (
                                <p>스토리포유 링크로 이동</p>
                            )}
                             */}
                            {/* {activeTab === 'drawing' && (
                                <DrawingList
                                    creationList={creationList}
                                    openModal={openModal}
                                />
                            )}
                            {activeTab === 'writing' && (
                                <WritingList
                                    creationList={creationList}
                                    randomImage={randomImage}
                                    openModal={openModal}
                                />
                            )}
                            {activeTab === 'tab_3' && <div>스토리포유 링크로 이동</div>} */}
                        </div>
                    </div>
                </div>
            </section>
            {modalOpen && (
                <WideViewModal
                    image={selectedImage}
                    onClose={() => setModalOpen(false)}
                />
            )}
            {writingModalOpen && (
                <WritingDetailModal
                    onClose={() => {
                        setWritingModalOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default AllContest;
