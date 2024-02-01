import React from 'react';
import '../styles/IndividualContest.scss';
import Navigation from '../components/Navigation';
import ContestConts from '../components/ContestConts';
import ContestBest from '../components/ContestBest';

const IndividualContest = () => {
    const slideMockData = [
        {
            id: 1,
            imageUrl: '/images/test/slide-test-1.png',
            creatorImage: 'test.jpg',
            creatorName: '홍길동',
            creatorAffiliation: '둘리 초등학교 3-2',
            workTitle: '푸른하늘과 얼음성',
        },
        {
            id: 2,
            imageUrl: '/images/test/slide-test-2.png',
            creatorImage: 'test.jpg',
            creatorName: '이효리',
            creatorAffiliation: '둘리 초등학교 3-2',
            workTitle: '도토리하우스',
        },
    ];
    // 임시데이터

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents contest-detail">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">상상의 집 콘테스트</h3>
                            {/* 검색 폼 */}
                        </div>
                        <p className="btn register-my-work">내 작품 올리기</p>
                        <div className="best-conts-slider">
                            <p className="best-tit">
                                상상의 집 콘테스트 실시간 BEST
                            </p>
                            <ContestBest slideData={slideMockData} />
                        </div>
                        <ul className="contest-category-list">
                            <ContestConts />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndividualContest;
