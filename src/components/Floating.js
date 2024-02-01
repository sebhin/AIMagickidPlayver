// 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가
import React from 'react';
import '../styles/Floating.scss';

const Floating = () => {
    return (
        <div className="floating-btn">
            <figure className="bubble">
                <img
                    src={'/images/float-bubble.svg'}
                    alt="float-bubble"
                />
            </figure>
            <figure className="char">
                <img
                    src={'/images/float-char.svg'}
                    alt="float-char"
                />
            </figure>
        </div>
    );
};

export default Floating;
