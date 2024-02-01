import React, { useState } from 'react';
import '../styles/OptionChoiceModal.scss';

const OptionChoiceModal = ({ options_title, options_image, onSelect, title }) => {
    console.log(options_title);
    console.log(options_image);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        console.log("사용자가 클릭한 옵션으로 상태 업데이트: ", option)
        setSelectedOption(option); // 사용자가 클릭한 옵션으로 상태 업데이트
    };

    const handleConfirmClick = () => {
        if (selectedOption) {
            onSelect(selectedOption); // 선택된 옵션이 있으면 Draw 컴포넌트로 전달
        }
    };
    return (
        <>
            <section className="option-modal">
                <div className="inner">
                    <h3 className="option-choice-title">{title}</h3>
                    <ul className="option-list">
                        {options_title.map((option, index) => (
                            <li
                                key={index}
                                className={
                                    option === selectedOption ? 'selected' : ''
                                }
                                onClick={() => handleOptionClick(option)}>
                                <figure className="option-image" >
                                    <img src={options_image[index]} alt='option-image'/>
                                </figure>
                                <p>{option.kr}</p>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="btn okay-btn"
                        onClick={handleConfirmClick}
                    >
                        확인
                    </div>
                </div>
            </section>
        </>
    );
};

export default OptionChoiceModal;
