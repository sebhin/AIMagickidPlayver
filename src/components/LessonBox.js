import React, { useState } from 'react';

const LessonBox = ({ lessonData }) => {
    // 현재 포시되고 있는 페이지 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);

    const lastContentPageNum =
        lessonData.content_list.length > 0
            ? lessonData.content_list[lessonData.content_list.length - 1]
                  .page_num
            : 0;
    // lessonData(props)로 받은 여러 페이지 데이터를 하나의 배열로 결합
    const combinedData = [
        { ...lessonData.cover, case: 'cover' },
        { ...lessonData.summary, case: 'summary' },
        ...lessonData.content_list,
        {
            ...lessonData.wrapup,
            case: 'wrapup',
            page_num: lastContentPageNum + 1,
        },
    ];

    // combinedData 배열을 페이지 번호(Page_num) 기준으로 정렬
    const sortedContents = combinedData.sort((a, b) => a.page_num - b.page_num);
    console.log(sortedContents)

    // 페이지 렌더링
    const renderSlide = (content) => {
        console.log('case: ',content.case)
        switch (content.case) {
            case 'cover':
                return (
                    <figure className="cover-image">
                        <img
                            src={content.image}
                            alt="커버 이미지"
                        />
                    </figure>
                );
            case 'summary':
                return (
                    <div className='summary'>
                    <h3 className='training-tit'>학습목표</h3> <em className='training-desc'>{content.learning_direction}</em>
                    {content.content_list.map((value, index) => (
                        <div className='value-container'>
                            <p className='value-tit'>{value.title}</p>
                            <p className='value-desc'>{value.description}</p>
                        </div>
                    ))}
                    </div>
                );
            // case 'text':
            //     return <p>{content.text}</p>;
            // case 'image':
            //     return (
            //         <img
            //             src={content.image}
            //         />
            //     );
            // case 'mix':
            //     return (
            //         <div>
            //             <img
            //                 src={content.image}
            //                 alt={content.title}
            //             />
            //             <p>{content.text}</p>
            //         </div>
            //     );
            case 'wrapup':
                if(content.type=="multiple"){
                    return (
                        <div className='wrapup-container'>
                            {content.content_list.map((item, index) => (
                                <div key={index}>
                                    <h3 className='wrapup-tit'>{item.title}</h3>
                                    <h3 className='wrapup-sub-tit'>{item.question}</h3>
                                    <ul className='answer-list'>
                                        {item.selection_list.map(
                                            (choice, choiceIndex) => (
                                                <li key={choiceIndex}>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleChoiceSelect(
                                                                index,
                                                                choiceIndex
                                                            )
                                                        }
                                                    >
                                                        {choice}
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    );
                }
                else if(content.type=="activity"){
                    return ( //마무리활동 멘트 추가 
                        <div> 
                            {content.content_list.map((item, index) => (
                                <img
                                    src={item.image}
                                />
                            ))}
                        </div>
                    )
                }
                
            default:
                return (
                    <img
                        src={content.image}
                    />
                );
        }
    };

    // 현재 컨텐츠를 renderSlide 함수에 전달
    const currentContent = sortedContents[currentIndex];

    // 답변 고르기
    const handleChoiceSelect = (questionIndex, choiceIndex) => {
        console.log(
            `Question ${questionIndex + 1}, Choice ${choiceIndex + 1} selected`
        );
    };

    // 이전 버튼
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    // 다음 버튼
    const handleNext = () => {
        if (currentIndex < sortedContents.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <div className="text-book">
                <div className="arrow-container">
                    <figure
                        className="arrow prev"
                        onClick={handlePrev}
                    >
                        <img
                            src={'/images/prev-btn.svg'}
                            alt="prev-btn"
                        />
                    </figure>
                    <p className="index">
                        {sortedContents[currentIndex].page_num}
                    </p>
                    <figure
                        className="arrow next"
                        onClick={handleNext}
                    >
                        <img
                            src={'/images/next-btn.svg'}
                            alt="next-btn"
                        />
                    </figure>
                </div>
                {/* <h2>{currentContent.title}</h2> */}
                {renderSlide(currentContent)}
            </div>
        </>
    );
};

export default LessonBox;
