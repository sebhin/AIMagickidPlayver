import React from 'react';
import '../styles/CategoryBox.scss';
import { useNavigate } from 'react-router-dom';

const CategoryBox = ({ topicTitle, category, image, trainingType, trainingId, checkEnable }) => {
    const navigation = useNavigate();

    const handleGoPrompt = () => {
        if(checkEnable)
            navigation(`/prompt/${trainingType}/${trainingId}`);
        else alert("곧 오픈될 예정입니다.")
    };

    return (
        <>
            <li
                className="category-item"
                onClick={handleGoPrompt}
            >
                <figure className="category-thumb">
                    {image && (
                        <img
                            src={image}
                            alt={topicTitle}
                        />
                    )}
                </figure>
                <div className="category-name">
                    <div className="topic-container">
                        <p className="category">{category}</p>
                        <p className="topic-title">{topicTitle}</p>
                    </div>
                    <div className="btn make-btn">만들기</div>
                </div>
            </li>
        </>
    );
};

export default CategoryBox;
