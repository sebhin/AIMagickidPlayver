import React from 'react';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const PromptGuide = ({ description }) => {
    return (
        <>
            <div className="guide-box">
                <div className="guide-desc description-line">
                    <RenderTextWithBreaks text={description} />
                </div>
            </div>
        </>
    );
};

export default PromptGuide;
