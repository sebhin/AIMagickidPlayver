import React, { useEffect, useState } from 'react';
import '../styles/Navigation.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const isTeacher = localStorage.getItem('isTeacher') === 'true';
    const [activeTab, setActiveTab] = useState(null);
    const [logoImage, setLogoImage] = useState('');
    // 2024.01.18 추가
    const [isScalePageVisible, setIsScalePageVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const story4uURL = process.env.REACT_APP_STORY4U_URL;
    const story4uPort = process.env.REACT_APP_STORY4U_PORT;
    const USER_ID = localStorage.getItem('userID');
    const USER_NAME = localStorage.getItem('userName');

    const logos = [
        '/images/logo-6.svg',
        '/images/logo-5.svg',
        '/images/logo-3.svg',
    ];

    const toggleScalePage = () => {
        setIsScalePageVisible(!isScalePageVisible);
    };

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[randomIndex]);
    }, []);

    useEffect(() => {
        if (location.pathname === '/home') {
            setActiveTab('myHome');
        } else if (
            location.pathname === '/class' ||
            location.pathname.startsWith('/classdetail') ||
            location.pathname.startsWith('/promptCategory') ||
            location.pathname.startsWith('/prompt')
        ) {
            setActiveTab('myClass');
        } else if (
            // location.pathname.startsWith('/allcontest') ||
            // location.pathname.startsWith('/individualContest')
            location.pathname.startsWith('/work/school')
        ) {
            setActiveTab('allcontest');
        } else if (location.pathname === '/community') {
            setActiveTab('community');
        } else if (location.pathname === '/work/my') {
            setActiveTab('myHome');
        } else if (location.pathname === '/teacher-main') {
            setActiveTab('student');
        } else {
            setActiveTab(null);
        }
    }, [location.pathname]);

    const handleTabClick = (tab_name) => {
        console.log(`${tab_name}클릭`);
        if (tab_name === 'myHome') {
            navigate('/home');
        } else if (tab_name === 'myClass') {
            navigate('/class');
        } else if (tab_name === 'allcontest') {
            navigate('/work/school');
        } else if (tab_name === 'community') {
            navigate('/community');
        } else if (tab_name === 'student') {
            navigate('/teacher-main');
        }
    };

    const handleChevronClick = (tab_name) => {
        setActiveTab(activeTab === tab_name ? null : tab_name);
        console.log('클릭');
    };

    const isTabActive = (tab_name) => {
        return activeTab === tab_name;
    };

    const handleArtWorkClick = () => {
        navigate('/work/my');
    };

    const handlePoemClick = () => {
        navigate('/promptCategory/writing');
    };

    const handleDrawClick = () => {
        navigate('/promptCategory/drawing');
    };

    const handleStory4UClick = () => {
        // window.location.href = 'http://43.203.68.230:3000/';
        const params = { userID: USER_ID, userName: USER_NAME };
        const query = new URLSearchParams(params).toString();
        window.open(
            `${story4uURL}:${story4uPort}/selecting?${query}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const handleHomeClick = () => {
        if (USER_ID) {
            navigate('/home');
        } else {
            navigate('/');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isTeacher');
        localStorage.removeItem('userID');
        localStorage.removeItem('userName');
        navigate('/');
    };

    const [openTab, setOpenTab] = useState(null);

    const handleAccordionClick = (tab_name) => {
        setOpenTab(openTab === tab_name ? null : tab_name);
    };

    return (
        <nav className="nav">
            <h1
                className="logo"
                onClick={handleHomeClick}
            >
                <img
                    src={logoImage}
                    alt="logo"
                />
            </h1>
            <ul className="nav-list">
                <li>
                    <div
                        className={
                            activeTab === 'myHome' ? 'nav-btn on' : 'nav-btn'
                        }
                    >
                        <div
                            className="left"
                            onClick={() => handleTabClick('myHome')}
                        >
                            <figure>
                                <img
                                    src={
                                        activeTab === 'myHome'
                                            ? '/images/nav/myhome-blue.svg'
                                            : '/images/nav/myhome.svg'
                                    }
                                    alt="나의 공간"
                                />
                            </figure>
                            <p>나의 공간</p>
                        </div>
                        <figure
                            className="right"
                            onClick={() => handleChevronClick('myHome')}
                        >
                            <img
                                src="/images/nav/chevron-bottom.svg"
                                alt="chevron"
                            />
                        </figure>
                    </div>
                    {isTabActive('myHome') && (
                        <ul className="accordion-content">
                            <li onClick={() => handleTabClick('myHome')}>
                                나의 공간
                            </li>
                            <li onClick={handleArtWorkClick}>
                                나의 작품 모아 보기
                            </li>
                            {/* <li>나의 질문 보기</li> */}
                        </ul>
                    )}
                </li>
                <li>
                    <div
                        className={
                            activeTab === 'myClass' ? 'nav-btn on' : 'nav-btn'
                        }
                    >
                        <div
                            className="left"
                            onClick={() => handleTabClick('myClass')}
                        >
                            <figure>
                                <img
                                    src={
                                        activeTab === 'myClass'
                                            ? '/images/nav/myclass-blue.svg'
                                            : '/images/nav/myclass.svg'
                                    }
                                    alt="나의 수업"
                                />
                            </figure>
                            <p>나의 수업</p>
                        </div>
                        <figure
                            className="right"
                            onClick={() => handleChevronClick('myClass')}
                        >
                            <img
                                src="/images/nav/chevron-bottom.svg"
                                alt="chevron"
                            />
                        </figure>
                    </div>
                    {isTabActive('myClass') && (
                        <ul className="accordion-content">
                            <li onClick={() => handleTabClick('myClass')}>
                                나의 수업
                            </li>
                            <li onClick={handlePoemClick}>글 만들기</li>
                            <li onClick={handleDrawClick}>그림 만들기</li>
                            <li onClick={handleStory4UClick}>
                                그림동화 만들기
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div
                        className={
                            activeTab === 'allcontest'
                                ? 'nav-btn on'
                                : 'nav-btn'
                        }
                        onClick={() => handleTabClick('allcontest')}
                    >
                        {/* 2024-02-08 업데이트 v1 | 우리학교 아이콘 변경 (left태그 수정) */}
                        <div className="left">
                            <figure>
                                <img
                                    src={
                                        activeTab === 'allcontest'
                                            ? '/images/nav/school-building-blue.svg'
                                            : '/images/nav/school-building.svg'
                                    }
                                    alt="콘테스트"
                                />
                            </figure>
                            <p>우리학교</p>
                        </div>
                        <figure
                            className="right"
                            onClick={() => handleChevronClick('allcontest')}
                        >
                            <img
                                src="/images/nav/chevron-bottom.svg"
                                alt="chevron"
                            />
                        </figure>
                    </div>
                    {isTabActive('allcontest') && (
                        <ul className="accordion-content">
                            <li onClick={() => handleTabClick('allcontest')}>
                                전체 작품 모아보기
                            </li>
                        </ul>
                    )}
                </li>
                {isTeacher && (
                    <li>
                        <div
                            className={
                                activeTab === 'student'
                                    ? 'nav-btn on'
                                    : 'nav-btn'
                            }
                            onClick={() => handleTabClick('student')}
                        >
                            <div className="left">
                                <figure>
                                    <img
                                        src={
                                            activeTab === 'student'
                                                ? '/images/nav/situation-blue.svg'
                                                : '/images/nav/situation.svg'
                                        }
                                        alt="학생현황"
                                    />
                                </figure>
                                <p>학생현황</p>
                            </div>
                            <figure
                                className="right"
                                onClick={() => handleChevronClick('student')}
                            >
                                <img
                                    src="/images/nav/chevron-bottom.svg"
                                    alt="chevron"
                                />
                            </figure>
                        </div>
                        {isTabActive('student') && (
                            <ul className="accordion-content">
                                <li onClick={() => handleTabClick('student')}>
                                    우리반 현황
                                </li>
                            </ul>
                        )}
                    </li>
                )}
                {/* 커뮤니티 */}
                {/* <li> 
                    <div
                        className={
                            activeTab === 'community' ? 'nav-btn on' : 'nav-btn'
                        }
                        onClick={() => handleTabClick('community')}
                    >
                        <div className="left">
                            <figure>
                                <img
                                    src={
                                        activeTab === 'community'
                                            ? '/images/nav/community-blue.svg'
                                            : '/images/nav/community.svg'
                                    }
                                    alt="커뮤니티"
                                />
                            </figure>
                            <p>커뮤니티</p>
                        </div>
                        <figure
                            className="right"
                            onClick={() => handleChevronClick('community')}
                        >
                            <img
                                src="/images/nav/chevron-bottom.svg"
                                alt="chevron"
                            />
                        </figure>
                    </div>
                    {isTabActive('community') && (
                        <ul className="accordion-content">
                            <li>묻고 답하기</li>
                        </ul>
                    )}
                </li> */}
            </ul>
            <button
                className="logout"
                onClick={handleLogout}
            >
                <span>로그아웃</span>
                <figure>
                    <img
                        src={'/images/logout.svg'}
                        alt="logout"
                    />
                </figure>
            </button>
            <div
                id="floatingButton"
                className="ham-menu"
                onClick={toggleScalePage}
            >
                <span>
                    <img
                        src={'/images/nav/bx-menu.svg'}
                        alt=""
                    />
                </span>
                <span>MENU</span>
            </div>
            <div
                id="scalePage"
                className={`scale-page-content ${
                    isScalePageVisible ? 'visible' : ''
                }`}
            >
                <div
                    class="close-tab"
                    onClick={toggleScalePage}
                >
                    <img
                        src={'/images/nav/close.svg'}
                        alt=""
                    />
                </div>
                {/* 메뉴들 */}
                <ul className="tab-nav-list">
                    <li className="my">
                        <div className="tab-left">
                            <figure>
                                <img
                                    src={'/images/nav/tab-my.svg'}
                                    alt=""
                                />
                            </figure>
                            <span>나의 공간</span>
                        </div>
                        <div className="tab-right">
                            <div
                                className="nav-con"
                                onClick={() => handleTabClick('myHome')}
                            >
                                나의공간
                            </div>
                            <div
                                className="nav-con"
                                onClick={handleArtWorkClick}
                            >
                                나의 작품 모아보기
                            </div>
                        </div>
                    </li>
                    <li className="class">
                        <div className="tab-left">
                            <figure>
                                <img
                                    src={'/images/nav/tab-class.svg'}
                                    alt=""
                                />
                            </figure>
                            <span>나의 수업</span>
                        </div>
                        <div className="tab-right">
                            <div
                                className="nav-con"
                                onClick={() => handleTabClick('myClass')}
                            >
                                나의 수업
                            </div>
                            <div
                                className="nav-con"
                                onClick={handlePoemClick}
                            >
                                글 만들기
                            </div>
                            <div
                                className="nav-con"
                                onClick={handleDrawClick}
                            >
                                그림 만들기
                            </div>
                            <div
                                className="nav-con"
                                onClick={handleStory4UClick}
                            >
                                그림동화 만들기
                            </div>
                        </div>
                    </li>
                    <li className="school">
                        <div className="tab-left">
                            <figure>
                                <img
                                    src={'/images/nav/tab-school.svg'}
                                    alt=""
                                />
                            </figure>
                            <span>우리 학교</span>
                        </div>
                        <div className="tab-right">
                            <div
                                className="nav-con"
                                onClick={() => handleTabClick('allcontest')}
                            >
                                전체 작품 모아보기
                            </div>
                        </div>
                    </li>
                </ul>
                <button
                    className="tab-logout"
                    onClick={handleLogout}
                >
                    <span>로그아웃</span>
                    <figure>
                        <img
                            src={'/images/logout.svg'}
                            alt="logout"
                        />
                    </figure>
                </button>
            </div>
            <div
                className={`menu-mask ${isScalePageVisible ? 'visible' : ''}`}
            ></div>
        </nav>
    );
};

export default Navigation;
