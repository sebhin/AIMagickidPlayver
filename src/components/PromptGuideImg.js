import React from 'react';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const PromptGuideImg = ({img, description}) => {
    return (
        <>
            <div className="prompt-guide-img-container flex">
                <figure className="guide-img"><img src={img}></img> </figure>
                <div  className="guide-desc description-line">
                    <RenderTextWithBreaks text={description} />
                </div >
            </div>
        </>
    );
};



export default PromptGuideImg;
