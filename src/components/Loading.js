import React from 'react';
import '../styles/Loading.scss';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const Loading = ({ type }) => {
    //NOTE: 2024.01.03 10초마다 멘트 변경 필요 + 30초 후에 로딩화면이 닫히게 설정
    const loading_writing_text = [
        'AI 마법사가 글을 쓰고 있어요. 과연 어떤 멋진 글을 보여줄까요? 상상해봐요!',
        '과연 얼마나 멋진 글이 나올까요? 친구들과 힘께 이야기해봐요!',
    ];
    const loading_drawing_text = [
        'AI 마법사가 그림을 그리고 있어요. 과연 어떤 멋진 그림을 보여줄까요? 상상해봐요!',
        '여러분이 지금 상상하고 있는 것을 AI 마법사가 그림으로 만들고 있어요. 어떤 멋진 것을 상상하고 있나요?',
        '과연 어떤 놀라운 그림이 나올까요? 친구들과 함께 이야기해봐요!',
    ];
    let random_index_writing = Math.floor(
        Math.random() * loading_writing_text.length
    );
    let random_index_drawing = Math.floor(
        Math.random() * loading_drawing_text.length
    );

    return (
        <>
            <section className="loading-section">
                <div className="inner">
                    <figure className="loading-robot">
                        {/* 2024-01-24 | 로딩 이미지 변경 */}
                        <img
                            src={'/images/char-3.svg'}
                            alt="loading-robot"
                        />
                    </figure>
                    {type === 'writing' && (
                        <p className="loading-txt">
                            <RenderTextWithBreaks
                                text={
                                    loading_writing_text[random_index_writing]
                                }
                            />
                        </p>
                    )}
                    {type === 'drawing' && (
                        <p className="loading-txt">
                            <RenderTextWithBreaks
                                text={
                                    loading_drawing_text[random_index_drawing]
                                }
                            />
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default Loading;
