import React, { useState, useEffect } from 'react';
import '../styles/PromptCategory.scss';
import Navigation from '../components/Navigation';
import CategoryBox from '../components/CategoryBox';
import { useClass } from '../context/ClassContext';
import { useParams } from 'react-router-dom';

import { getTrainingList } from '../api/ClassAPI';
import Floating from '../components/Floating';

const PromptCategory = () => {
    const { trainingType } = useParams();
    const [trainingData, setTrainingData] = useState([]);
    console.log('trainingType', trainingType);

    useEffect(() => {
        callTrainingListAPIFunc(trainingType);
    }, [trainingType]);

    const callTrainingListAPIFunc = async (training_type) => {
        const response = await getTrainingList(training_type);

        if (response.success) {
            console.log(response.data);
            setTrainingData(response.data);
        } else {
            console.log(response.error.errMsg);
        }
    };

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents prompt-category">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">어떤 주제로 만들어볼까요?</h3>
                        </div>
                        <ul className="category-list">
                            {trainingData.map((item, index) => (
                                <CategoryBox
                                    key={index}
                                    topicTitle={item.training_topic_title}
                                    category={item.training_category}
                                    image={item.training_image}
                                    trainingType={trainingType}
                                    trainingId={item.training_id}
                                    checkEnable={
                                        item.training_description !== '변경필요'
                                            ? true
                                            : false
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {/*  2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                <Floating />
            </section>
        </>
    );
};

export default PromptCategory;
