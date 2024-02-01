import React, { useRef } from 'react';
import '../styles/WritingDetailModal.scss';
import RenderTextWithBreaks from './RenderTextWithBreaks';
import ReactToPrint from 'react-to-print';
import Print from './Print';

const WritingDetailModal = ({ text, onClose, checkPrint }) => {
    const printRef = useRef();

    return (
        <>
            <section className="writing-detail-modal">
                <div className="inner">
                    <figure>
                        <img
                            src={'/images/paper-wide.svg'}
                            alt="writing-detail-paper"
                        />
                    </figure>
                    <div className="writing-conts">
                        <h3 className="writing-tit">{text.title}</h3>
                        <div className="writing-all">
                            <RenderTextWithBreaks text={text.creation} />
                        </div>
                    </div>
                    {checkPrint && (
                        <ReactToPrint
                            trigger={() => (
                                <button className="btn close-btn">
                                    인쇄하기
                                </button>
                            )}
                            content={() => printRef.current}
                        />
                    )}
                    <span
                        className="btn close-btn"
                        onClick={onClose}
                    >
                        확인
                    </span>
                </div>
                <Print
                    ref={printRef}
                    type="writing"
                    text={text}
                    onClose={onClose}
                />
            </section>
        </>
    );
};

export default WritingDetailModal;
