import React, { useEffect, useState } from 'react';
import '../styles/NickName.scss';
import { useNavigate } from 'react-router-dom';
import { getRandomNickname, updateNickname } from '../api/UserAPI'

const NickName = () => {
    const USER_ID = localStorage.getItem('userID');

    const navigate = useNavigate();
    const [logoImage, setLogoImage] = useState();
    const [nickname, setNickname] = useState('');

    const logos = [
        '/images/logo-6.svg',
        '/images/logo-5.svg',
        '/images/logo-3.svg',
    ];

    const generateNickname = async (event) => {
        event.preventDefault();
        const result = await getRandomNickname()
        if(result.success){
            console.log(result.data)
            setNickname(result.data);
        }
        else{
            console.log(result.error)
        }
    };

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setLogoImage(logos[randomIndex]);
    }, []);

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoMain = async (event) => {
        event.preventDefault();
        let result = await updateNickname(USER_ID, nickname)
        if(result.success){
            localStorage.setItem('userName', result.data);
            navigate('/home');
        }
        else{
            console.log(result.error)
        }
        
    };

    return (
        <>
            <div
                id="wrap"
                className="nickname-wrap"
            >
                <div className="nickname-container">
                    <div className="nickname-robot">
                        <div className="box"></div>
                        <figure className="robot-img">
                            <img
                                src={'/images/box-robot.svg'}
                                alt="box-robot"
                            />
                        </figure>
                    </div>
                    <div className="nickname-form">
                        <h1
                            className="logo"
                            onClick={handleGoHome}
                        >
                            <img
                                src={logoImage}
                                alt="logo"
                            />
                        </h1>
                        <h3>회원가입이 거의 완료 되었어요!</h3>
                        <p>이제 별명을 만들어볼까요?</p>
                        <form className="nick-form" onSubmit={handleGoMain}>
                            <div className="nick-inputs">
                                <input
                                    type="text"
                                    placeholder="별명을 생성해보아요!"
                                    value={nickname}
                                    readOnly
                                />
                                <button 
                                    onClick={generateNickname} 
                                    className="generate-btn"
                                >
                                    <figure>
                                        <img
                                            src={'/images/refresh.svg'}
                                            alt=""
                                        />
                                    </figure>
                                </button>
                            </div>
                            <button className="submit-btn">만들기</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NickName;
