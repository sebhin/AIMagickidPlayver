import React from 'react';
import '../styles/WideViewModal.scss';

const WideViewModal = ({ image, onClose }) => {
    return (
        <>
            <section className="wide-view-modal">
                <div className="inner">
                    <span
                        className="btn close-btn"
                        onClick={onClose}
                    >
                        확인
                    </span>
                    <figure className="wide-image">
                        <img
                            src={image}
                            alt="image"
                        />
                    </figure>
                </div>
            </section>
        </>
    );
};

export default WideViewModal;
