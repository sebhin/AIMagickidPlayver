import React from 'react';
import '../styles/CommunityList.scss';

const CommunityList = () => {
    return (
        <>
            <li className="question">
                <div className="question-conts">
                    <p className="que-tit">선생님~! 궁금한게 있습니다~!</p>
                    <div className="profile">
                        <figure className="user-img"></figure>
                        <p className="user-name">김당근</p>
                    </div>
                </div>
                <div className="que-bottom flex">
                    <p className="date">2023.12.20</p>
                    <div className="reply">
                        <p className="reply-count">3</p>
                        <figure>
                            <img
                                src={'/images/chatbox.svg'}
                                alt="chatbox"
                            />
                        </figure>
                    </div>
                </div>
            </li>
            <li className="question">
                <div className="question-conts">
                    <p className="que-tit">선생님~! 궁금한게 있습니다~!</p>
                    <div className="profile">
                        <figure className="user-img"></figure>
                        <p className="user-name">김당근</p>
                    </div>
                </div>
                <div className="que-bottom flex">
                    <p className="date">2023.12.20</p>
                    <div className="reply">
                        <p className="reply-count">3</p>
                        <figure>
                            <img
                                src={'/images/chatbox.svg'}
                                alt="chatbox"
                            />
                        </figure>
                    </div>
                </div>
            </li>
            <li className="question">
                <div className="question-conts">
                    <p className="que-tit">선생님~! 궁금한게 있습니다~!</p>
                    <div className="profile">
                        <figure className="user-img"></figure>
                        <p className="user-name">김당근</p>
                    </div>
                </div>
                <div className="que-bottom flex">
                    <p className="date">2023.12.20</p>
                    <div className="reply">
                        <p className="reply-count">3</p>
                        <figure>
                            <img
                                src={'/images/chatbox.svg'}
                                alt="chatbox"
                            />
                        </figure>
                    </div>
                </div>
            </li>
            <li className="question">
                <div className="question-conts">
                    <p className="que-tit">선생님~! 궁금한게 있습니다~!</p>
                    <div className="profile">
                        <figure className="user-img"></figure>
                        <p className="user-name">김당근</p>
                    </div>
                </div>
                <div className="que-bottom flex">
                    <p className="date">2023.12.20</p>
                    <div className="reply">
                        <p className="reply-count">3</p>
                        <figure>
                            <img
                                src={'/images/chatbox.svg'}
                                alt="chatbox"
                            />
                        </figure>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CommunityList;
