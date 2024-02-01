import React, { useEffect, useState } from 'react';
import '../styles/WritingTitle.scss';

const WritingTitle = ({ onSelectionChange }) => {
    // 제목 만들기 가상 데이터
    const TitleMockData = {
        training_topic_title: '상상 속 여행지',
        training_image: '/images/test/test-title.svg',
        training_description:
            '멋진 상상의 여행지 그림을 보고, 그림 안에 있는 것들을 골라서 글쓰기 AI에게 알려주세요 \n 여러분들이 고른 것들을 모아서 상상의 여행지에 멋진 이름을 지어줄거에요! ',
        category: '상상의 여행지에 있는 것',
        selection: ['달', '숲', '구름', '유니콘', '무지개', '해바라기', '사탕'],
    };

    // 선택된 아이템 배열 state
    const [selectedItems, setSelectedItems] = useState([]);

    // 체크박스 클릭 시 호출되는 함수
    // 체크박스 선택 상태 관리, selectedItems 배열 업데이트
    const handleCheckboxChange = (item) => {
        setSelectedItems((prevItems) => {
            if (prevItems.includes(item)) {
                return prevItems.filter((i) => i !== item);
            } else {
                return [...prevItems, item];
            }
        });
    };

    useEffect(() => {
        onSelectionChange(selectedItems);
    }, [selectedItems, onSelectionChange]);

    return (
        <>
            <div className="prompt-writing-title-box">
                <figure className="title-image">
                    <img
                        src={TitleMockData.training_image}
                        alt="test-image"
                    />
                </figure>
                <div className="option-toggles">
                    <div className="tiggle-option-title">
                        {TitleMockData.category}
                    </div>
                    <div className="toggle-option-container">
                        {TitleMockData.selection.map((item, index) => (
                            <label
                                key={index}
                                className={`switch ${
                                    selectedItems.includes(item)
                                        ? 'checked'
                                        : ''
                                }`}
                            >
                                <input
                                    type="checkbox"
                                    name={item}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div
                    className={`btn run-btn ${
                        selectedItems.length > 0 ? 'active' : ''
                    }`}
                >
                    만들어보기
                </div>
            </div>
        </>
    );
};

export default WritingTitle;
