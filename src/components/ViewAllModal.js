import React, { useState } from 'react';
import '../styles/ViewAllModal.scss';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const ViewAllModal = ({ type, resultList, onSelectContent, onClose }) => {

    // 현재 보여줄 인덱스 state
    const [currentIndex, setCurrentIndex] = useState(0);
    // 선택된 항목의 인덱스 state
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);


    // 화살표 다음 버튼 누르기
    const handleNextClick = (array_length) => {
        setCurrentIndex((prev_index) => (prev_index + 1) % array_length);
    };

    // 화살표 이전 버튼 누르기
    const handlePrevClick = (array_length) => {
        setCurrentIndex((prev_index) => {
            if (prev_index <= 0) return array_length - 1;
            return prev_index - 1;
        });
    };

    // 선택된 항목 설정
    const selectItem = (index) => {
        setSelectedItemIndex(index);
        onSelectContent(resultList[index]);
    };

    // 선택된 이미지에 selected라는 클래스명 추가하기
    const getSelectedItemClassName = (index) => {
        return index === selectedItemIndex ? 'selected' : '';
    };

    return (
        <>
            <section className="view-all-modal">
                <div className="inner">
                    <h3 className="titles">전체 작품</h3>

                    <div className="slide-container">
                        <button
                            onClick={() => handlePrevClick(resultList.length)}
                            className="prev-btn"
                        >
                            <img
                                src={'/images/prev-btn.svg'}
                                alt="prev-btn"
                            />
                        </button>

                        <ul className="all-list">
                            <li
                                className={getSelectedItemClassName(
                                    currentIndex
                                )}
                                onClick={() => selectItem(currentIndex)}
                            >

                                {type === "drawing" && (<>
                                    <img
                                        src={resultList[currentIndex]}
                                        alt="image 1"
                                    />
                                </>)}
                                {type === "writing" && (<>
                                    <figure>
                                        <img
                                            src={'/images/writing-detail-paper.svg'}
                                            alt=""
                                        />
                                    </figure>
                                    <div className="paper-text-conts">
                                        <RenderTextWithBreaks text={resultList[currentIndex]} />
                                        {/* {resultList[currentIndex]} */}
                                    </div>
                                </>)}

                            </li>
                            {resultList.length > 1 && (<>
                                <li
                                    className={getSelectedItemClassName(
                                        (currentIndex + 1) % resultList.length
                                    )}
                                    onClick={() =>
                                        selectItem(
                                            (currentIndex + 1) % resultList.length
                                        )
                                    }
                                >
                                    {type === "drawing" && (<>
                                        <img
                                        src={
                                            resultList[
                                            (currentIndex + 1) %
                                            resultList.length
                                            ]
                                        }
                                        alt="image 2"
                                    />
                                </>)}

                                {type === "writing" && (<>
                                    <figure>
                                            <img
                                                src={'/images/writing-detail-paper.svg'}
                                                alt=""
                                            />
                                        </figure>
                                        <p className="paper-text-conts">
                                            {
                                                resultList[
                                                (currentIndex + 1) %
                                                resultList.length
                                                ]
                                            }
                                        </p>
                                </>)}
                                    
                                </li>
                            </>)}
                        </ul>

                        <button
                            onClick={() => handleNextClick(resultList.length)}
                            className="next-btn"
                        >
                            <img
                                src={'/images/next-btn.svg'}
                                alt="next-btn"
                            />
                        </button>
                    </div>

                    <p className="btn select-btn" onClick={onClose}>선택하기</p>
                </div>
            </section>
        </>
    );
};

export default ViewAllModal;