import React from 'react';
import { useClass } from '../context/ClassContext';
import { useNavigate } from 'react-router-dom';

const TrainingBox = ({ trainingData }) => {
    const navigation = useNavigate();
    const { setTrainingType } = useClass();

    const handleTrainingClick = () => {
        setTrainingType(trainingData.training_type);
        console.log(`/promptCategory/${trainingData.training_type}`)
        navigation(`/promptCategory/${trainingData.training_type}`);
    };

    return (
        <>
            <div className="training">
                <p className="todays-training">오늘의 실습</p>
                <div className="prac-1">
                    <h3 className="training-tit">{trainingData.title}</h3>
                    <p className="desc">{trainingData.description}</p>
                </div>
                <div className="prac-2">
                    {trainingData.content_list.map((content, index) => (
                        <p
                            className="training-guide"
                            key={index}
                        >
                            {content}
                        </p>
                    ))}
                </div>
                <div className="prac-3">
                    <div className="prac-3-tit">
                        <span>링크</span>
                        <figure>
                            <img
                                src={'/images/link.svg'}
                                alt="link"
                            />
                        </figure>
                    </div>
                    <ul className="training-link-list">
                        <li onClick={handleTrainingClick}>
                            <span>실습하러 가기</span>
                            <figure>
                                <img
                                    src={'/images/link-arrow.svg'}
                                    alt="link-arrow"
                                />
                            </figure>
                        </li>
                        <li className="recommend-training">
                            오늘의 추천 학습 주제 :
                            <em> {trainingData.recommendation_training}</em>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TrainingBox;
