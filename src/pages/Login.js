import React, { useEffect, useState } from 'react';
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import { studentLogin } from '../api/UserAPI';

const Login = () => {
    const navigate = useNavigate();
    const [userID, setUserID] = useState('');
    const [logoImage, setLogoImage] = useState();
    const [inputError, setInputError] = useState(''); //NOTE: 로그인 시, 숫자가 아닌 다른 것을 입력하면 error 띄우기 위한 state
    const [loginError, setLoginError] = useState(''); //NOTE: 로그인 시, 등록되지 않은 코드를 입력했을때 error 띄우기 위한 state

    const logos = [
        '/images/logo-6.svg',
        '/images/logo-5.svg',
        '/images/logo-3.svg',
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[randomIndex]);
    }, []);

    const handleGoHome = () => {
        navigate('/');
    };

    // NOTE: 로그인 코드창에 숫자만 입력 가능하도록 수정
    // const handleUserIDChange = (event) => {
    //     const value = event.target.value;
    //     if (/^\d*$/.test(value)) {
    //         setUserID(value);
    //         setInputError('');
    //     } else {
    //         setInputError('* 숫자만 입력해주세요');
    //     }
    // };

    // 2024-02-08 업데이트 v2 (2024-01-31) | 오류 일부 수정함
    const handleUserIDChange = (event) => {
        const value = event.target.value;
        const nonNumeric = /[^0-9-]/g;

        // 입력된 값이 숫자와 하이픈만 포함하고 있는지 확인
        if (nonNumeric.test(value)) {
            setInputError('* 숫자만 입력해주세요');
            return; // 에러가 발생했으므로 추가 처리를 중단
        } else {
            setInputError(''); // 에러 메시지 초기화
        }

        // 입력 값에 대한 포맷 변경
        let formattedValue = value;
        if (formattedValue.length > 4 && formattedValue[4] !== '-') {
            formattedValue =
                formattedValue.slice(0, 4) + '-' + formattedValue.slice(4);
        }
        if (formattedValue.length > 8 && formattedValue[8] !== '-') {
            formattedValue =
                formattedValue.slice(0, 8) + '-' + formattedValue.slice(8);
        }
        if (formattedValue.length > 12) {
            formattedValue = formattedValue.slice(0, 12);
        }

        setUserID(formattedValue);
    };

    const handleLoginClick = async (event) => {
        event.preventDefault();
        const result = await studentLogin(userID);
        if (result.success) {
            console.log('로그인 결과: ', result.data);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('isTeacher', 'false');
            localStorage.setItem('userID', userID);
            localStorage.setItem('userName', result.data.name);
            if (result.data.name.length === 0) {
                navigate('/nickname');
            } else {
                navigate('/home');
            }
        } else {
            console.log('로그인 결과: ', result.error);
            //등록되지 않은 학생 번호 or 잘못입력하였습니다. 재입력바랍니다.
            setLoginError('* 등록되지 않은 학생번호 입니다.');
        }
    };

    const handleTeacherLoginClick = () => {
        navigate('/teacher-login');
    };

    return (
        <>
            <div
                id="wrap"
                className="login-wrap"
            >
                <div className="login-container">
                    <div className="login-robot">
                        <div className="box"></div>
                        <figure className="robot-img">
                            <img
                                src={'/images/char-6.svg'}
                                alt="login-robot"
                            />
                        </figure>
                    </div>
                    <div className="login-form">
                        <h1
                            className="logo"
                            onClick={handleGoHome}
                        >
                            <img
                                src={logoImage}
                                alt="logo"
                            />
                        </h1>
                        <div className="login-text">
                            {/* <h3>Login</h3> */}
                            <p>AI가 그리는 무한한 가능성의 세계</p>
                        </div>
                        <form onSubmit={handleLoginClick}>
                            {/* 2024-02-08 업데이트 v1 | placeholder 변경 */}
                            <input
                                type="text"
                                placeholder="로그인 코드 예시) 0001-234-567"
                                onChange={handleUserIDChange}
                                value={userID}
                            />
                            <button className="login-btn">로그인</button>
                        </form>
                        {inputError && (
                            <p className="input-error">{inputError}</p>
                        )}
                        {loginError && (
                            <p className="login-error">{loginError}</p>
                        )}
                        <p
                            className="teacher"
                            onClick={handleTeacherLoginClick}
                        >
                            선생님이신가요?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
