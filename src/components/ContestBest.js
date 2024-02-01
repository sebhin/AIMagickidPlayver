import React, { useState } from 'react';
import '../styles/ContestBest.scss';

const ContestBest = ({ slideData }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // 이전 슬라이드
    const goToPreviousSlide = () => {
        const is_firstSlide = currentSlideIndex === 0;
        const new_index = is_firstSlide
            ? slideData.length - 1
            : currentSlideIndex - 1;
        setCurrentSlideIndex(new_index);
    };

    // 다음 슬라이드
    const goToNextSlide = () => {
        const is_lastSlide = currentSlideIndex === slideData.length - 1;
        const new_index = is_lastSlide ? 0 : currentSlideIndex + 1;
        setCurrentSlideIndex(new_index);
    };

    const currentSlide = slideData[currentSlideIndex];

    return (
        <>
            <li className="slide flex">
                <figure
                    className="arrow"
                    onClick={goToPreviousSlide}
                >
                    <img
                        src={'/images/prev-btn.svg'}
                        alt="prev-btn"
                    />
                </figure>
                <div className="slide-flex">
                    <figure className="slide-img">
                        <img
                            src={currentSlide.imageUrl}
                            alt={currentSlide.workTitle}
                        />
                    </figure>
                    <div className="slide-desc">
                        <div className="creator">
                            <figure className="creator-image"></figure>
                            <div className="creator-name">
                                <p className="name">
                                    {currentSlide.creatorName}
                                </p>
                                <p className="school">
                                    {currentSlide.creatorAffiliation}
                                </p>
                            </div>
                        </div>
                        <h4 className="work-title">{currentSlide.workTitle}</h4>
                        <div className="btn show-btn">작품 구경하기</div>
                    </div>
                </div>
                <figure
                    className="arrow"
                    onClick={goToNextSlide}
                >
                    <img
                        src={'/images/next-btn.svg'}
                        alt="next-btn"
                    />
                </figure>
            </li>
        </>
    );
};

export default ContestBest;
