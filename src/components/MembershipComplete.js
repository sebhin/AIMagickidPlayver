import React, { useEffect, useState } from 'react';
import '../styles/MembershipComplete.scss';
import { useNavigate } from 'react-router-dom';

const MembershipComplete = () => {
    const navigate = useNavigate();
    const [logoImage, setLogoImage] = useState();
    const logos = [
        '/images/logo-1.svg',
        '/images/logo-2.svg',
        '/images/logo-4.svg',
    ];
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[randomIndex]);
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleMemebershipClick = () => {
        navigate('/membership');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoTeacherLogin = () => {
        navigate('/teacher-login');
    };

    return (
        <>
            <div id="wrap">
                <header id="header">
                    <div className="inner flex">
                        <h1
                            className="logo"
                            onClick={handleGoHome}
                        >
                            <img
                                src={logoImage}
                                alt="logo"
                            />
                        </h1>
                        <div className="header-left">
                            <ul className="navi">
                                <li>솔루션</li>
                                <li>주요기능</li>
                                <li>요금제</li>
                            </ul>
                            <ul className="utils">
                                <li
                                    className="btn login-btn"
                                    onClick={handleLoginClick}
                                >
                                    로그인
                                </li>
                                <li
                                    className="btn sign-btn"
                                    onClick={handleMemebershipClick}
                                >
                                    회원가입
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="complete-section">
                    <div className="inner">
                        <figure className="complete-modal-robot">
                            {/* 2024-01-24 | 이미지 교체 */}
                            <img
                                src={'/images/char-2.svg'}
                                alt="complete-robot"
                            />
                        </figure>
                        <div className="complete-txt-container">
                            <p>가입완료!</p>
                            <h3>
                                <em>홍길동</em>님, 환영해요
                            </h3>
                            <div className="btn-container">
                                <button
                                    className="home-btn"
                                    onClick={handleGoHome}
                                >
                                    홈으로 가기
                                </button>
                                <button
                                    className="login-btn"
                                    onClick={handleGoTeacherLogin}
                                >
                                    로그인 하기
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MembershipComplete;
