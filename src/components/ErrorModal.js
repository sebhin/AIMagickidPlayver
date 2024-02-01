import React from 'react';
import '../styles/ErrorModal.scss';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const ErrorModal = ({ error_message, onClose }) => {
    return (
        <>
            <section className="error-modal-section">
                <div className="inner">
                    <figure className="sleeping-robot">
                        {/* 2024-01-24 | 이미지 교체 */}
                        <img
                            src={'/images/char-7.svg'}
                            alt="sleeping-robot"
                        />
                    </figure>
                    <div className="error-text-container">
                        <p className="main-txt">
                            {/* AI가 잠시 낮잠을 자고 있어요, 아래 버튼을 눌러서
                            깨워주세요! */}
                            <RenderTextWithBreaks text={error_message} />
                        </p>
                        <div className="btn-container">
                            <div
                                className="btn close-btn"
                                onClick={onClose}
                            >
                                깨우기
                            </div>
                            {/* NOTE: 2024.01.08 이후엔 충전하러가기 버튼 추가 필요 */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorModal;
