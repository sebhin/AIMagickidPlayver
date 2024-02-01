import React from 'react';
import '../styles/DiscussionModal.scss';

const DiscussionModal = ({ discussion_topic, discussion_example, onClose }) => {
    return (
        <>
            <section className="debate-section">
                <div className="inner">
                    <div className="debate-tit">
                        <div className="tit-top">
                            <figure>
                                <img
                                    src={'/images/target-02.svg'}
                                    alt="target"
                                />
                            </figure>
                            <span>오늘의 토의 주제</span>
                        </div>
                        <p className="tit-bottom">
                            {discussion_topic}
                        </p>
                    </div>
                    <div className="chat-bubbles">
                        <div className="bubble bubble-top">
                            <figure className="yellow">
                                <img
                                    src={'/images/yellow.svg'}
                                    alt="yellow"
                                />
                            </figure>
                            <div className="chat-bubble">
                                {discussion_example[0]
                                    .split('.')
                                    .map((sentence, index) => (
                                        <p key={index}>
                                            {sentence.trim() +
                                                (index <
                                                    discussion_example[0].split(
                                                        '.'
                                                    ).length -
                                                    1
                                                    ? '.'
                                                    : '')}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="bubble bubble-bottom">
                            <div className="chat-bubble">
                                <div>
                                    {discussion_example[1]
                                        .split('.')
                                        .map((sentence, index) => (
                                            <p key={index}>
                                                {sentence.trim() +
                                                    (index <
                                                        discussion_example[1].split(
                                                            '.'
                                                        ).length -
                                                        1
                                                        ? '.'
                                                        : '')}
                                            </p>
                                        ))}
                                </div>
                            </div>
                            <figure className="yellow">
                                <img
                                    src={'/images/green.svg'}
                                    alt="yellow"
                                />
                            </figure>
                        </div>
                    </div>
                    <div
                        className="btn close-btn"
                        onClick={onClose}
                    >
                        확인
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscussionModal;
