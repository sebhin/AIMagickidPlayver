import React, { useState, useEffect } from 'react';
import '../styles/Result.scss';
import ViewAllModal from './ViewAllModal';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const Result = ({ type, result, resultList, onResult }) => {
    const [selectedContent, setSelectedContent] = useState('');
    const [showViewAllModal, setShowViewAllModal] = useState(false);

    console.log('Result compo=> ', resultList);
    const result_title = {
        writing: 'AI가 답했어요.',
        drawing: 'AI가 그린 결과',
    };

    useEffect(() => {
        setSelectedContent(result);
    }, [result]);

    const handleSelectContent = (content) => {
        setSelectedContent(content);
    };
    const handleClose = () => {
        setShowViewAllModal(false);
    };

    return (
        <>
            <div className="result-container">
                <h3 className="result-tit">{result_title[type]}</h3>
                {type === 'writing' && (
                    <div className="result-box writing-result">
                        <RenderTextWithBreaks text={result} />
                    </div>
                )}
                {type === 'drawing' && (
                    <>
                        <div className="result-box draw-result">
                            <img src={selectedContent}></img>
                        </div>
                        <p className="commercial-useage">
                            * 이 그림은 AI가 그린것으로 상업적으로 사용하면
                            안돼요~!
                        </p>
                    </>
                )}
                {/* 2024-02-08 업데이트 v1 | 크게보기,저장하기 버튼에 아이콘 추가 (result-btn-container 전체 복붙) */}
                <div className="result-btn-container">
                    <div
                        className="btn wide-view-btn"
                        onClick={() => setShowViewAllModal(true)}
                    >
                        <figure>
                            <img
                                src={'/images/wide-view.svg'}
                                alt="wide-view"
                            />
                        </figure>
                        <span>크게보기</span>
                    </div>
                    <div>
                        {showViewAllModal && (
                            <ViewAllModal
                                type={type}
                                resultList={[...resultList].reverse()}
                                onSelectContent={handleSelectContent}
                                onClose={handleClose}
                            />
                        )}
                    </div>
                    <div
                        className="btn save-btn"
                        onClick={() => onResult(selectedContent)}
                    >
                        <figure>
                            <img
                                src={'/images/save.svg'}
                                alt="save"
                            />
                        </figure>
                        <span>저장하기</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Result;
