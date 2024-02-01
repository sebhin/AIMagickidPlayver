import React, { useEffect, useState } from 'react';
import '../styles/Writing.scss';

const Writing = ({ writingData, selected, setSelected, onRunClick }) => {
    console.log('writingData=> ', writingData);
    // 체크박스 상태 관리: 체크박스가 클릭될 때마다 호출
    const handleCheckboxChange = (category, selection_item) => {
        const updatedCategory = writingData
            .find((toggle) => toggle.category === category)
            .selection.reduce((acc, item) => {
                acc[item] = false;
                return acc;
            }, {});

        updatedCategory[selection_item] = true;

        const updatedSelected = {
            ...selected,
            [category]: updatedCategory,
        };
        setSelected(updatedSelected);
    };

    // 모든 카테고리에서 최소 하나의 옵션이 선택되었는지 확인
    const isEveryCategorySelected = () => {
        return Object.keys(selected).every((category) =>
            Object.values(selected[category]).some((value) => value)
        );
    };

    return (
        <>
            <div className="prompt-box">
                {writingData.map((toggle, index) => (
                    <div
                        className="toggle-option"
                        key={index}
                    >
                        <p className="toggle-option-title">{toggle.category}</p>
                        <div className="toggle-option-container">
                            {toggle.selection.map((selection_item, idx) => {
                                const is_checked = selected[toggle.category]
                                    ? selected[toggle.category][selection_item]
                                    : false;
                                return (
                                    <label
                                        key={idx}
                                        className={`switch ${
                                            is_checked ? 'checked' : ''
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={is_checked}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    toggle.category,
                                                    selection_item
                                                )
                                            }
                                        />
                                        <span>{selection_item}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
                {/* 2024-02-08 업데이트 v1 | 버튼에 아이콘 추가 */}
                <div
                    className="btn run-btn"
                    style={{ opacity: isEveryCategorySelected() ? 1 : 0.5 }}
                    onClick={() => isEveryCategorySelected() && onRunClick()}
                >
                    <figure>
                        <img
                            src={'/images/nav/school.svg'}
                            alt=""
                        />
                    </figure>
                    <span>만들어 보기</span>
                </div>
            </div>
        </>
    );
};

export default Writing;
