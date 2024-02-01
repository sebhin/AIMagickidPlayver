import React, { useState, useEffect } from 'react';
import OptionChoiceModal from './OptionChoiceModal';
import '../styles/Draw.scss';

const Draw = ({ drawMockData, onAllOptionsSelected, onMakeButtonClick }) => {
    const initialPrompt = drawMockData.content;
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);
    const parts = initialPrompt.split(/(\[선택지\d+\]|\!|\.)/);

    // 선택지 버튼 클릭 핸들러
    const handleOptionClick = (index) => {
        setIsModalOpen(true);
        setCurrentSelectionIndex(index);
    };

    // 옵션 선택 핸들러
    const handleOptionChoice = (selectedOption) => {
        console.log('selectedOption: ', selectedOption);
        setSelectedOptions((prev) => ({
            ...prev,
            [`선택지${currentSelectionIndex + 1}_kr`]: selectedOption.kr,
            [`선택지${currentSelectionIndex + 1}_en`]: selectedOption.en,
        }));
        setIsModalOpen(false);
    };

    // 선택된 옵션들을 부모 컴포넌트에 전달
    const handleMakeButtonClick = () => {
        if (allOptionsSelected) {
            onMakeButtonClick(selectedOptions);
        }
    };

    // 옵션이 다 선택되었는지 확인 후 버튼 보이게 만듦
    const allOptionsSelected =
        Object.keys(selectedOptions).length ===
        drawMockData.selection_list.length * 2;

    // console.log("length: ",Object.keys(selectedOptions).length)
    // console.log(initialPrompt)
    // console.log(drawMockData.selection_list)

    // useEffect(() => {
    //     if (allOptionsSelected) {
    //         onAllOptionsSelected(true);
    //     }
    // }, [allOptionsSelected, onAllOptionsSelected]);
    return (
        <>
            <div className="prompt-draw-box">
                {parts.map((part, index) => {
                    if (/\[선택지\d+\]/.test(part)) {
                        // 선택지 번호 추출
                        const selectionIndex = part.match(/\d+/)[0];
                        return (
                            <React.Fragment key={index}>
                                <button
                                    className={`choice-btn ${
                                        selectedOptions[
                                            `선택지${selectionIndex}_kr`
                                        ]
                                            ? 'selected'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        handleOptionClick(selectionIndex - 1)
                                    }
                                >
                                    {selectedOptions[
                                        `선택지${selectionIndex}_kr`
                                    ] || `선택지 ${selectionIndex}`}
                                </button>
                            </React.Fragment>
                        );
                    } else if (part === '.' || part === '!') {
                        return (
                            <React.Fragment key={index}>
                                <span>{part}</span>
                                <br />
                            </React.Fragment>
                        );
                    } else {
                        return <span key={index}>{part}</span>;
                    }
                })}
                {/* 2024-02-08 업데이트 v1 | 버튼에 아이콘 추가 */}
                {allOptionsSelected && (
                    <button
                        className="btn run-btn"
                        onClick={handleMakeButtonClick}
                    >
                        <figure>
                            <img
                                src={'/images/nav/school.svg'}
                                alt=""
                            />
                        </figure>
                        <span>만들어 보기</span>
                    </button>
                )}
            </div>

            {isModalOpen && (
                <OptionChoiceModal
                    choiceNumber={currentSelectionIndex + 1}
                    options_title={
                        drawMockData.selection_list[currentSelectionIndex]
                            .selection_title
                    }
                    options_image={
                        drawMockData.selection_list[currentSelectionIndex]
                            .selection_image
                    }
                    onSelect={handleOptionChoice}
                    title={
                        drawMockData.selection_list[currentSelectionIndex].title
                    }
                />
            )}
        </>
    );
};

export default Draw;
