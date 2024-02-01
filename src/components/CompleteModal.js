import React from 'react';
import '../styles/CompleteModal.scss';
import { useNavigate } from 'react-router-dom';

const CompleteModal = ({ user_name, onClose }) => {
    const navigate = useNavigate();
    return (
        <>
            <section className="complete-modal-section">
                <div className="inner">
                    <figure className="happy-robot">
                        {/* 2024-01-24 | 이미지 교체 */}
                        <img
                            src={'/images/char-2.svg'}
                            alt="complete-robot"
                        />
                    </figure>
                    <div className="complete-txt-container">
                        <p className="sub-txt">참 잘했어요!</p>
                        <p className="main-txt">
                            <em>{user_name}</em> 님의 멋진 작품이 저장 되었어요!
                        </p>
                        <div className="btn-container">
                            <div
                                className="btn go-work-btn"
                                onClick={() => navigate('/work/my')}
                            >
                                작품 보러가기
                            </div>
                            <div
                                className="btn close-btn"
                                onClick={onClose}
                            >
                                닫기
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompleteModal;
