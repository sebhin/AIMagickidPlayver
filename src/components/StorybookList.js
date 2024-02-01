// 2024-01-24 | StorybookList 추가
import React from 'react';

const StorybookList = () => {
    return (
        <>
            <ul className="story4u-contents">
                {/* 2024-01-24 | con-item map하기 */}
                <li className="con-item">
                    <figure className="book-cover">
                        <img
                            // src={book.bookcover}
                            alt="동화책 커버"
                        />
                    </figure>
                    <figure className="book-bottom">
                        <img
                            src="/images/book-cover-bottom.svg"
                            alt="동화책 책 모양 배경"
                        />
                    </figure>
                    <div className="book-name-container">
                        <h3 className="book-title">
                            책 제목
                            {/* 2024-02-01 | 제목 뒤 테두리를 위한 div 태그 하나 추가 */}
                            <div className="book-title-stroke">책 제목</div>
                        </h3>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default StorybookList;
