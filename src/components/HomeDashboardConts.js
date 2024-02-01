import React from 'react';
import '../styles/HomeDashboardConts.scss';
import { useNavigate } from 'react-router-dom';

const HomeDashboardConts = () => {
    const story4uURL = process.env.REACT_APP_STORY4U_URL;
    const story4uPort = process.env.REACT_APP_STORY4U_PORT;
    const USER_ID = localStorage.getItem('userID');
    const USER_NAME = localStorage.getItem('userName');

    const navigate = useNavigate();

    const handleClassClick = () => {
        navigate('/class');
    };

    const handleWorkClick = () => {
        navigate('/work/my');
    };

    const handleWriteClick = () => {
        navigate('/promptcategory/writing');
    };

    const handleDrawClick = () => {
        navigate('/promptcategory/drawing');
    };

    const handleStory4UClick = () => {
        const params = { userID: USER_ID, userName: USER_NAME };
        const query = new URLSearchParams(params).toString();
        window.open(
            `${story4uURL}:${story4uPort}/selecting?${query}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <>
            <li
                className="con-box big yellow"
                onClick={handleClassClick}
            >
                <figure className="circle-img yellow">
                    <img
                        src={'/images/main/circle-yellow.svg'}
                        alt="circle-yellow"
                    />
                </figure>
                <div className="circles">
                    <div className="circle"></div>
                </div>
                <div className="text-container yellow">
                    <h3 className="text-tit yellow">수업하러 가기</h3>
                    <p className="desc yellow">재미있는 배움의 세계로!</p>
                </div>
                <figure className="robot yellow">
                    {/* 2024-01-24 | 이미지 교체 */}
                    <img
                        src={'/images/char-8.svg'}
                        alt="main-icon"
                    />
                </figure>
            </li>
            <li
                className="con-box big blue"
                onClick={handleWorkClick}
            >
                <figure className="circle-img blue">
                    <img
                        src={'/images/main/circle-blue.svg'}
                        alt="circle-blue"
                    />
                </figure>
                <div className="circles">
                    <div className="circle"></div>
                </div>
                <div className="text-container blue">
                    <h3 className="text-tit blue">내 작품 보기</h3>
                    <p className="desc blue">나만의 멋진 창작물들!</p>
                </div>
                <figure className="robot blue">
                    {/* 2024-01-24 | 이미지 교체 */}
                    <img
                        src={'/images/char-5.svg'}
                        alt="main-icon"
                    />
                </figure>
            </li>
            <li
                className="con-box pink"
                onClick={handleWriteClick}
            >
                <figure className="circle-img pink">
                    <img
                        src={'/images/main/circle-pink.svg'}
                        alt="circle-yellow"
                    />
                </figure>
                <div className="circles">
                    <div className="circle"></div>
                </div>
                <div className="text-container pink">
                    <h3 className="text-tit pink">글 만들기</h3>
                    <p className="desc pink">상상력을 글로 펼쳐보자!</p>
                </div>
                <figure className="robot pink">
                    <img
                        src={'/images/main/main-icon-3.svg'}
                        alt="main-icon"
                    />
                </figure>
            </li>
            <li
                className="con-box green"
                onClick={handleDrawClick}
            >
                <figure className="circle-img green">
                    <img
                        src={'/images/main/circle-green.svg'}
                        alt="circle-green"
                    />
                </figure>
                <div className="circles">
                    <div className="circle"></div>
                </div>
                <div className="text-container green">
                    <h3 className="text-tit green">그림 만들기</h3>
                    <p className="desc green">색채와 놀이, 그림속의 모험!</p>
                </div>
                <figure className="robot green">
                    <img
                        src={'/images/main/main-icon-4.svg'}
                        alt="main-icon"
                    />
                </figure>
            </li>
            <li
                className="con-box orange"
                onClick={handleStory4UClick}
            >
                <figure className="circle-img orange">
                    <img
                        src={'/images/main/circle-orange.svg'}
                        alt="circle-orange"
                    />
                </figure>
                <div className="circles">
                    <div className="circle"></div>
                </div>
                <div className="text-container orange">
                    <h3 className="text-tit orange">그림동화 만들기</h3>
                    <p className="desc orange">
                        내 이야기, 내 그림으로 꿈꾸다!
                    </p>
                </div>
                <figure className="robot orange">
                    <img
                        src={'/images/main/main-icon-5.svg'}
                        alt="main-icon"
                    />
                </figure>
            </li>
        </>
    );
};

export default HomeDashboardConts;
