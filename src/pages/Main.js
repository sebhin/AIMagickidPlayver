import React, { useEffect, useState } from 'react';
import '../styles/Main.scss';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    const goDashBoard = () => {
        navigate('/login');
    };

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

    const handleGoHome = () => {
        navigate('/');
    };

    const handleMembershipClick = () => {
        navigate('/membership');
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
                                    onClick={handleMembershipClick}
                                >
                                    회원가입
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="section-1">
                    <div className="inner flex">
                        <div className="left">
                            <div className="left-main-txt">
                                누구나
                                <br /> 재미있게
                                <br /> 배우는 AI
                                <br />
                                <figure className="main-white-logo">
                                    <img
                                        src={'/images/main/logo-white.svg'}
                                        alt="logo-white"
                                        className="white-logo"
                                    />
                                    <img
                                        src={'/images/main/main-1-circle.svg'}
                                        alt="circle"
                                        className="circle"
                                    />
                                </figure>
                            </div>
                            <div className="btn-box">
                                <div
                                    className="btn start-btn"
                                    onClick={goDashBoard}
                                >
                                    지금 시작하기
                                </div>
                                <div className="btn requst-btn">도입문의</div>
                            </div>
                        </div>
                        <figure className="right right-robot">
                            <img
                                src={'/images/char-1.svg'}
                                alt="main-robot"
                            />
                        </figure>
                    </div>
                </section>
                <section className="section-2">
                    <div className="inner flex">
                        <div className="left">
                            <p className="sub-tit-en">Education</p>
                            <h2>
                                AI 교육은
                                <br />
                                AI 매직키드와 함께
                            </h2>
                            <p className="sub-tit-kr">
                                실습 중심 학습으로 다양한 체험과
                                <br /> 윤리적 사고 배양까지!
                            </p>
                            <div className="btn request-btn">도입문의</div>
                        </div>
                        <div className="right">
                            <div className="right-conts-box">
                                <div className="icon-box">
                                    <figure>
                                        <img
                                            src={'/images/main/laptop.svg'}
                                            alt="laptop"
                                        />
                                    </figure>
                                </div>
                                <div className="text-box">
                                    <h3 className="text-tit">실습중심 학습</h3>
                                    <p>
                                        직접 AI를 활용한 실습을 <br />
                                        통하여 학습하는 체험형 교육
                                    </p>
                                </div>
                            </div>
                            <div className="right-conts-box">
                                <div className="icon-box">
                                    <figure>
                                        <img
                                            src={'/images/main/file-edit.svg'}
                                            alt="laptop"
                                        />
                                    </figure>
                                </div>
                                <div className="text-box">
                                    <h3 className="text-tit">
                                        다양한 학습자료
                                    </h3>
                                    <p>
                                        AI 기술에 대한 다양한 <br />
                                        학습 자료와 실습 예제 제공
                                    </p>
                                </div>
                            </div>
                            <div className="right-conts-box">
                                <div className="icon-box">
                                    <figure>
                                        <img
                                            src={'/images/main/hexagon.svg'}
                                            alt="laptop"
                                        />
                                    </figure>
                                </div>
                                <div className="text-box">
                                    <h3 className="text-tit">
                                        윤리적 사고 배양
                                    </h3>
                                    <p>
                                        AI 기술의 윤리적 사용에 <br />
                                        대한 중요성을 함께 교육
                                    </p>
                                </div>
                            </div>
                            <div className="right-conts-box">
                                <div className="icon-box">
                                    <figure>
                                        <img
                                            src={'/images/main/layers.svg'}
                                            alt="laptop"
                                        />
                                    </figure>
                                </div>
                                <div className="text-box">
                                    <h3 className="text-tit">
                                        차세대 기술교육
                                    </h3>
                                    <p>
                                        생성형 AI 활용 능력 향상 <br />
                                        교육으로 미래형 인재를 육성
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <div className="inner">
                        <div className="tit-container">
                            <p className="sub-tit-en">Motivation</p>
                            <h2>
                                <em className="interesting">흥미롭게</em> 배우는
                                AI 교육
                            </h2>
                            <p className="sub-tit-kr">
                                학습동기를 부여하며 흥미를 유발하는 즐거운 AI
                                클래스
                            </p>
                        </div>
                        <ul className="motivation-list">
                            <li>
                                <figure>
                                    <img
                                        src={'/images/main/main-3-1.svg'}
                                        alt="main-3-1"
                                    />
                                </figure>
                                <dl>
                                    <dt>
                                        학습동기
                                        <br />
                                        부여
                                    </dt>
                                    <dd>
                                        <span className="bold">
                                            AI를 활용한 그림, 글 생성 등을
                                            <br />
                                            통해 창작의 즐거움
                                        </span>
                                        과 학습동기 부여
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src={'/images/main/main-3-2.svg'}
                                        alt="main-3-2"
                                    />
                                </figure>
                                <dl>
                                    <dt>
                                        교육과
                                        <br />
                                        재미의 조화
                                    </dt>
                                    <dd>
                                        <span className="bold">
                                            기존의 학습 방식을 넘어서는
                                            <br />
                                            경험
                                        </span>
                                        으로 교육적 가치와 재미를 제공
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src={'/images/main/main-3-3.svg'}
                                        alt="main-3-3"
                                    />
                                </figure>
                                <dl>
                                    <dt>
                                        몰입도
                                        <br />
                                        증가
                                    </dt>
                                    <dd>
                                        <span className="bold">
                                            다양한 체험을 통한 학습
                                        </span>
                                        으로
                                        <br />
                                        학생들의 몰입도를 높임
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section-4">
                    <div className="inner flex">
                        <div className="left">
                            <p className="sub-tit-en">Discussion</p>
                            <h2>
                                <em>토의</em>로
                                <br />
                                생각의 확장까지
                            </h2>
                            <p className="sub-tit-kr">
                                단순 AI 제작 실습이 아닌,
                                <br /> 토론을 통한 생각의 확장까지!
                            </p>
                            <div className="btn request-btn">
                                <span>소개서 다운로드</span>
                                <figure>
                                    <img
                                        src={'/images/main/Download.svg'}
                                        alt="다운로드 아이콘"
                                    />
                                </figure>
                            </div>
                        </div>
                        <ul className="right">
                            <li>
                                <figure>
                                    <img
                                        src={'/images/main/Chatbubble.svg'}
                                        alt="말풍선"
                                    />
                                </figure>
                                <div className="text">
                                    <h3 className="chat-tit">사고 촉진</h3>
                                    <p>
                                        AI가 창작한 결과물에 대한
                                        <em className="bold">
                                            평가를 통해 비판적 사고 촉진
                                        </em>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src={
                                            '/images/main/Chatbubble-right.svg'
                                        }
                                        alt="말풍선"
                                    />
                                </figure>
                                <div className="text">
                                    <h3 className="chat-tit">생각의 확장</h3>
                                    <p>
                                        AI가 만들어낸 결과물에 대한
                                        <em className="bold">
                                            토의를 통해 다양한 관점을 이해
                                        </em>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src={'/images/main/Chatbubble.svg'}
                                        alt="말풍선"
                                    />
                                </figure>
                                <div className="text">
                                    <h3 className="chat-tit">이해 능력 향상</h3>
                                    <p>
                                        토론을 통해
                                        <em className="bold">
                                            원인과 결과의 관계를 파악하고,
                                            논리적 사고력
                                        </em>
                                        을 배양
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* 2024-02-08 업데이트 v2 | Footer 수정 */}
                <footer id="footer">
                    <div className="inner">
                        <div className="footer-tit-area">
                            <h1 className="footer-logo">
                                <img
                                    src={'/images/footer-logo.svg'}
                                    alt="footer-logo"
                                />
                            </h1>
                            <p className="area-desc">
                                AI매직키드는 AI와 친구가 될 수 있도록 즐겁고
                                안전하게 생성형 AI를 체험하는 교육 플랫폼입니다.
                                AI매직키드로 아이들은 자기 표현 능력을 키우고
                                AI와 상호작용하며 창의력을 향상시킬 수 있습니다.
                                <br />
                                <br />
                                아이들을 위해 체인트리(주)는 재미, 교육, 생활에
                                맞는 다채로운 유형의 콘텐츠를 제작합니다.
                            </p>
                        </div>
                        <div className="footer-main-con">
                            <div className="left">
                                <dl>
                                    <dt>사업자명</dt>
                                    <dd>체인트리 주식회사</dd>
                                </dl>
                                <dl>
                                    <dt>Address.</dt>
                                    <dd>
                                        울산광역시 중구 종가로 362-11
                                        울산과학기술진흥센터 3층 305호
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>사업자등록번호</dt>
                                    <dd>526-88-02959</dd>
                                </dl>
                                <dl>
                                    <dt>Tel.</dt>
                                    <dd>010-2007-5265</dd>
                                </dl>
                                <dl>
                                    <dt>E-Mail.</dt>
                                    <dd>chaintree0818@gmail.com</dd>
                                </dl>
                            </div>
                        </div>
                        <p className="copy-right">
                            @2024 CHAINTREE. All right reserved
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Main;
