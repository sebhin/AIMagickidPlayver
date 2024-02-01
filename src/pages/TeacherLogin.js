import React, { useEffect, useState } from 'react';
import '../styles/TeacherLogin.scss';
import { useNavigate } from 'react-router-dom';
import { teacherLogin } from '../api/UserAPI';

const TeacherLogin = () => {
    const navigate = useNavigate();
    const [logoImage, setLogoImage] = useState();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [idErrorMessage, setIdErrorMessage] = useState('');

    // 로그인 처리
    // 로그인 상태 로컬스토리지에 저장함
    const handleLogin = async (e) => {
        e.preventDefault();
        const user_id = id.replace(/-/g, '');
        const result = await teacherLogin(user_id, password);
        if (result.success) {
            console.log('로그인 결과: ', result.data);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('isTeacher', 'true');
            localStorage.setItem('userID', user_id);
            localStorage.setItem('userName', result.data.name);
            navigate('/teacher-main');
        } else {
            setErrorMessage('잘못된 아이디 또는 비밀번호입니다.');
        }
    };

    // 랜덤 로고 이미지
    const logos = [
        '/images/logo-6.svg',
        '/images/logo-5.svg',
        '/images/logo-3.svg',
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[randomIndex]);
    }, []);

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleIdChange = (event) => {
        //input change되면 에러메세지 사라짐
        let value = event.target.value;
        const numericValue = value.replace(/[^0-9-]/g, '');

        if (value !== numericValue) {
            setIdErrorMessage('* 숫자만 입력해주세요');
            setId(numericValue);
        } else {
            setIdErrorMessage('');
            if (value.length > 4 && value[4] !== '-') {
                value = value.slice(0, 4) + '-' + value.slice(4);
            }
            if (value.length > 8 && value[8] !== '-') {
                value = value.slice(0, 8) + '-' + value.slice(8);
            }
            if (value.length > 12) {
                value = value.slice(0, 12);
            }
            setId(value); // 변환된 값을 상태에 설정
        }
        setErrorMessage(''); // 기존 에러 메시지 초기화
    };

    const handlePasswordChange = (event) => {
        //input change되면 에러메세지 사라짐
        setPassword(event.target.value);
        setErrorMessage('');
    };

    return (
        <>
            <div
                id="wrap"
                className="teacher-login-wrap"
            >
                <div className="inner">
                    <h1
                        className="logo"
                        onClick={handleHomeClick}
                    >
                        <img
                            src={logoImage}
                            alt="logo"
                        />
                    </h1>
                    <h3>선생님 로그인</h3>
                    <form
                        className="teacher-form"
                        onSubmit={handleLogin}
                    >
                        <input
                            type="text"
                            placeholder="로그인 코드 예시) 0001-234-567"
                            value={id}
                            onChange={handleIdChange}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                        <button className="btn login-btn">로그인</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TeacherLogin;
