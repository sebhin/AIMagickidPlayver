import React from 'react';

function RenderTextWithBreaks({ text }) {

    const separators = /(\.|\n|!|\?|\~)/;
    const textParts = text.split(separators).filter((part) => part.trim() !== '')
    return (
        <>
            {textParts.map((part, index) => {
                // 마지막 요소가 아니고, 다음 요소가 구분자인 경우, 현재 요소와 구분자를 붙여서 출력 후 줄바꿈
                if (index < textParts.length - 1 && (textParts[index + 1] === '.' || textParts[index + 1] === '!' || textParts[index + 1] === '?'|| textParts[index + 1] === '~')) {
                    return <p key={index}>{part + textParts[index + 1]}</p>;
                }
                // 구분자 요소를 건너뛰기 위한 처리
                else if (part === '.' || part === '!'|| part === '?'|| part === '~') {
                    return null;
                }
                // 일반 텍스트 요소
                else {
                    return <span key={index}>{part}</span>;
                }
            })}
        </>
    );
}

export default RenderTextWithBreaks;