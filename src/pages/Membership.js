import React, { useEffect, useState } from 'react';
import '../styles/Membership.scss';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
    const navigate = useNavigate();
    // 이메일 주소 저장 (사용자가 email 입력하면 상태를 입력값으로 변경)
    const [email, setEmail] = useState('');
    // 이메일 도메인 상태 관리
    const [emailDomain, setEmailDomain] = useState('');
    // 이메일 중복확인 메세지 저장
    const [emailDuplicateMessage, setEmailDuplicateMessage] = useState('');
    // 비밀번호 유효성 확인 (숫자+영문포함 8자리)
    const [password, setPassword] = useState('');
    // 비밀번호 확인
    const [confirmPassword, setConfirmPassword] = useState('');
    // 비밀번호 유효성 에러 확인
    const [passwordError, setPasswordError] = useState('');
    // 비밀번호 일치 여부 확인
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    // 이름
    const [name, setName] = useState('');
    // 휴대폰 번호 상태
    const [phoneNumber, setPhoneNumber] = useState('');
    // 휴대폰 번호 에러 확인
    const [phoneNumberError, setPhoneNumberError] = useState('');
    // 소속 학교
    const [school, setSchool] = useState('');
    // 반
    const [classroom, setClassroom] = useState('');
    // 랜덤 로고
    const [logoImage, setLogoImage] = useState();
    // 이용약관 전체 내용 보이기
    const [showTerm, SetShowTerm] = useState(false);
    // 개인정보처리방침 전체 내용 보이기
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    // 이용약관 체크 확인
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    // 개인정보처리방침 체크 확인
    const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);

    // 이메일 임시 데이터
    const existingMockEmails = {
        email: ['test@naver.com', 'test@daum.net', 'test@google.com'],
    };

    // 이메일 입력 변경 핸들러 (사용자가 선택한 option으로 도메인 변경)
    const handleEmailInput = (event, field_type) => {
        if (field_type === 'address') {
            setEmail(event.target.value);
        } else if (field_type === 'domain') {
            setEmailDomain(event.target.value);
        }
    };

    // 이메일 중복 확인 핸들러
    const checkEmailDuplicate = () => {
        if (!email || !emailDomain) {
            alert('전체 이메일을 입력해주세요');
            return;
        }

        const full_email = email + '@' + emailDomain;
        if (existingMockEmails.email.includes(full_email)) {
            setEmailDuplicateMessage('* 사용중인 이메일입니다.');
        } else {
            setEmailDuplicateMessage('* 사용 가능한 이메일입니다.');
        }
    };

    // 비밀번호 유효성 검사
    const validatePassword = (pw) => {
        return pw.length >= 8 && /[a-zA-Z]/.test(pw) && /[0-9]/.test(pw);
    };

    // 비밀번호 변경
    const handlePasswordChange = (event) => {
        const pw = event.target.value;
        setPassword(pw);
        setPasswordError(
            validatePassword(pw)
                ? ''
                : '* 비밀번호는 숫자와 영문을 포함한 8자리 이상이어야 합니다.'
        );
    };

    // 비밀번호 확인
    const handleConfirmPasswordChange = (event) => {
        const confirm_pw = event.target.value;
        setConfirmPassword(confirm_pw);
        setConfirmPasswordError(
            confirm_pw === password ? '' : '* 비밀번호가 일치하지 않습니다.'
        );
    };

    // 휴대폰 번호 숫자만 입력되었는지 확인하는 핸들러
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
            setPhoneNumberError('');
        } else {
            setPhoneNumberError('* 숫자만 입력해 주세요.');
            setPhoneNumber('');
        }
    };

    // 이용약관 체크상태 확인하는 핸들러
    const handleTermsCheckboxChange = (event) => {
        setIsTermsChecked(event.target.checked);
    };

    // 개인정보처리방침 체크상태 확인하는 핸들러
    const handlePrivacyPolicyCheckboxChange = (event) => {
        setIsPrivacyPolicyChecked(event.target.checked);
    };

    // 폼 제출 이벤트 핸들러
    const handleSubmit = (event) => {
        event.preventDefault();

        // 모든 폼이 채워져있는지 확인 후 비어있는게 있다면 alert
        if (
            !email ||
            !emailDomain ||
            !password ||
            !confirmPassword ||
            !name ||
            !phoneNumber ||
            !school ||
            !classroom ||
            !isTermsChecked ||
            !isPrivacyPolicyChecked
        ) {
            alert('모든 필드를 입력하고, 필수 약관에 동의해주세요.');
            return;
        }

        // 이메일 전체 형태 확인
        const full_email = email + '@' + emailDomain;

        if (!/^[^@]+@[^@]+\.[^@]+$/.test(full_email)) {
            alert('유효하지 않은 이메일 주소입니다.');
            return;
        }

        // 비밀번호 일치 여부 확인
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 모든 폼이 채워졌다는 전제 하에 임시로 modal로 이동
        navigate('/commodal');
    };

    const logos = [
        '/images/logo-1.svg',
        '/images/logo-2.svg',
        '/images/logo-4.svg',
    ];

    useEffect(() => {
        const random_index = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[random_index]);
    }, []);

    const handleDetailClick = () => {
        SetShowTerm(!showTerm);
    };
    const handlePrivacyPolicyClick = () => {
        setShowPrivacyPolicy(!showPrivacyPolicy);
    };

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
            <div
                id="wrap"
                className="membership-wrap"
            >
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
                <section className="join-section">
                    <div className="inner">
                        <h3 className="join-tit">회원가입</h3>
                        <div className="txt-container">
                            <h4>필수입력 정보</h4>
                            <p>필수 항목이므로 반드시 입력해주시기 바랍니다.</p>
                        </div>
                        <form
                            className="membership-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="inputs">
                                <p>이메일</p>
                                <input
                                    className="email"
                                    type="text"
                                    placeholder="이메일"
                                    value={email}
                                    onChange={(event) =>
                                        handleEmailInput(event, 'address')
                                    }
                                />
                                <span className="at">@</span>
                                <input
                                    className="email"
                                    type="text"
                                    value={emailDomain}
                                    onChange={(event) =>
                                        handleEmailInput(event, 'domain')
                                    }
                                />
                                <select
                                    className="email-options"
                                    onChange={(event) =>
                                        handleEmailInput(event, 'domain')
                                    }
                                >
                                    <option value="">직접입력</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="google.com">
                                        google.com
                                    </option>
                                </select>
                                <button
                                    type="button"
                                    className="overlap-chk"
                                    onClick={checkEmailDuplicate}
                                >
                                    중복확인
                                </button>
                                {emailDuplicateMessage && (
                                    <p
                                        className={`error-message ${
                                            emailDuplicateMessage ===
                                            '* 사용 가능한 이메일입니다.'
                                                ? 'message-success'
                                                : 'error-message'
                                        }`}
                                    >
                                        {emailDuplicateMessage}
                                    </p>
                                )}
                            </div>
                            <div className="inputs">
                                <p>비밀번호</p>
                                <input
                                    type="password"
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                {passwordError && (
                                    <p className="error-message">
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                            <div className="inputs">
                                <p>비밀번호</p>
                                <input
                                    type="password"
                                    placeholder="비밀번호 확인"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {confirmPasswordError && (
                                    <p className="error-message">
                                        {confirmPasswordError}
                                    </p>
                                )}
                            </div>
                            <div className="inputs">
                                <p>이름</p>
                                <input
                                    type="text"
                                    placeholder="이름"
                                    className="colored-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="inputs">
                                <p>휴대폰 번호</p>
                                <input
                                    type="tel"
                                    placeholder="휴대폰 번호"
                                    className="colored-input"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                                {phoneNumberError && (
                                    <p className="error-message">
                                        {phoneNumberError}
                                    </p>
                                )}
                            </div>
                            <div className="inputs">
                                <p>소속 학교</p>
                                <input
                                    type="text"
                                    placeholder="소속 학교명"
                                    value={school}
                                    onChange={(e) => setSchool(e.target.value)}
                                />
                            </div>
                            <div className="inputs">
                                <p>반</p>
                                <input
                                    type="text"
                                    placeholder="무슨반"
                                    value={classroom}
                                    onChange={(e) =>
                                        setClassroom(e.target.value)
                                    }
                                />
                            </div>
                            <div className="terms-container">
                                <div className="check-inputs flex">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        onChange={handleTermsCheckboxChange}
                                        checked={isTermsChecked}
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="term-box"
                                    >
                                        <span>
                                            이용약관
                                            <em>&nbsp;&#40;필수&#41;</em>
                                        </span>
                                    </label>
                                    <span
                                        className="term-detail"
                                        onClick={handleDetailClick}
                                    >
                                        자세히보기
                                    </span>
                                </div>
                                {showTerm && (
                                    <p className="term-total-box">
                                        제1조(목적) 이 약관은 OO 회사(전자상거래
                                        사업자)가 운영하는 OO 사이버 몰(이하
                                        “몰”이라 한다)에서 제공하는 인터넷 관련
                                        서비스(이하 “서비스”라 한다)를 이용함에
                                        있어 사이버 몰과 이용자의 권리․의무 및
                                        책임사항을 규정함을 목적으로 합니다.
                                        ※「PC통신, 무선 등을 이용하는
                                        전자상거래에 대해서도 그 성질에 반하지
                                        않는 한 이 약관을 준용합니다.」
                                        제2조(정의) ① “몰”이란 OO 회사가 재화
                                        또는 용역(이하 “재화 등”이라 함)을
                                        이용자에게 제공하기 위하여 컴퓨터 등
                                        정보통신설비를 이용하여 재화 등을 거래할
                                        수 있도록 설정한 가상의 영업장을 말하며,
                                        아울러 사이버몰을 운영하는 사업자의
                                        의미로도 사용합니다. ② “이용자”란 “몰”에
                                        접속하여 이 약관에 따라 “몰”이 제공하는
                                        서비스를 받는 회원 및 비회원을 말합니다.
                                        ③ ‘회원’이라 함은 “몰”에 회원등록을 한
                                        자로서, 계속적으로 “몰”이 제공하는
                                        서비스를 이용할 수 있는 자를 말합니다. ④
                                        ‘비회원’이라 함은 회원에 가입하지 않고
                                        “몰”이 제공하는 서비스를 이용하는 자를
                                        말합니다. 제3조 (약관 등의 명시와 설명
                                        및 개정) ① “몰”은 이 약관의 내용과 상호
                                        및 대표자 성명, 영업소 소재지
                                        주소(소비자의 불만을 처리할 수 있는 곳의
                                        주소를 포함),
                                        전화번호․모사전송번호․전자우편주소,
                                        사업자등록번호, 통신판매업 신고번호,
                                        개인정보관리책임자등을 이용자가 쉽게 알
                                        수 있도록 00 사이버몰의 초기
                                        서비스화면(전면)에 게시합니다. 다만,
                                        약관의 내용은 이용자가 연결화면을 통하여
                                        볼 수 있도록 할 수 있습니다.
                                    </p>
                                )}
                                <div className="check-inputs flex">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        onChange={
                                            handlePrivacyPolicyCheckboxChange
                                        }
                                        checked={isPrivacyPolicyChecked}
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="term-box"
                                    >
                                        <span>
                                            개인정보처리방침
                                            <em>&nbsp;&#40;필수&#41;</em>
                                        </span>
                                    </label>
                                    <span
                                        className="term-detail"
                                        onClick={handlePrivacyPolicyClick}
                                    >
                                        자세히보기
                                    </span>
                                </div>
                                {showPrivacyPolicy && (
                                    <p className="term-total-box">
                                        제1조(목적) 이 약관은 OO 회사(전자상거래
                                        사업자)가 운영하는 OO 사이버 몰(이하
                                        “몰”이라 한다)에서 제공하는 인터넷 관련
                                        서비스(이하 “서비스”라 한다)를 이용함에
                                        있어 사이버 몰과 이용자의 권리․의무 및
                                        책임사항을 규정함을 목적으로 합니다.
                                        ※「PC통신, 무선 등을 이용하는
                                        전자상거래에 대해서도 그 성질에 반하지
                                        않는 한 이 약관을 준용합니다.」
                                        제2조(정의) ① “몰”이란 OO 회사가 재화
                                        또는 용역(이하 “재화 등”이라 함)을
                                        이용자에게 제공하기 위하여 컴퓨터 등
                                        정보통신설비를 이용하여 재화 등을 거래할
                                        수 있도록 설정한 가상의 영업장을 말하며,
                                    </p>
                                )}
                            </div>
                            <div className="form-btns">
                                <button className="join-btn">가입</button>
                                <button className="cancle-btn">취소</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Membership;
