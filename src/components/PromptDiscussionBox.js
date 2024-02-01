import React from 'react';

const PromptDiscussionBox = ({ discussion_topic, openModal }) => {
    return (
        <>
            <div className="discussion-box">
                <figure>
                    <img
                        src={'/images/target-black.svg'}
                        alt="target-icon"
                    />
                </figure>
                <p className="discussion-title">오늘의 토의 주제 : </p>
                <p className="discussion-topic">
                    {discussion_topic}
                </p>
                <div className="btn example-btn" onClick={openModal}>예시 보기</div>
            </div>
        </>
    );
};

export default PromptDiscussionBox;
