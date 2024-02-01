import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';
import Navigation from '../components/Navigation';
import HomeDashboardConts from '../components/HomeDashboardConts';
import { getTotalMagicbean } from '../api/MagicbeanAPI';
import Floating from '../components/Floating';

const Home = () => {
    const USER_ID = localStorage.getItem('userID');
    const USER_NAME = localStorage.getItem('userName');
    const [totalMagicbean, setTotalMagicbean] = useState(null);

    useEffect(() => {
        callgetTotalMagicbeanAPIFunc();
    }, []);

    const callgetTotalMagicbeanAPIFunc = async () => {
        const response = await getTotalMagicbean(USER_ID);

        if (response.success) {
            console.log(response.data);
            setTotalMagicbean(response.data);
        } else {
            console.log(response.error.errMsg);
        }
    };

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">
                                수업을 열심히 듣고 있네요, <em>{USER_NAME}</em>{' '}
                                님!
                            </h3>
                            <div className="remain-beans">
                                <figure>
                                    <img
                                        src={'/images/bean.svg'}
                                        alt="매직콩"
                                    />
                                </figure>
                                <p>
                                    잔여 콩 :{' '}
                                    <em className="blue-bold">
                                        {totalMagicbean}
                                    </em>{' '}
                                    콩
                                </p>
                            </div>
                        </div>
                        <ul className="board-container">
                            <HomeDashboardConts />
                        </ul>
                    </div>
                </div>
                {/* 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                <Floating />
            </section>
        </>
    );
};

export default Home;
