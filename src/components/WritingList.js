import React from 'react';

const WritingList = ({ creationList, randomImage, openModal, page_type }) => {
    const printDate = (date) => {
        const result_date = date.split('T')
        return result_date[0]
    };

    return (
        <ul className="writing-list">
            {creationList.map((creation, index) => (
                <li
                    key={index}
                    className="writing"
                    onClick={() =>
                        openModal({
                            title: creation.creation_title,
                            creation: creation.creation,
                        })
                    }
                >
                    <figure className="paper">
                        <img
                            src={randomImage}
                            alt="writing-paper"
                        />
                    </figure>
                    <div className="writing-txt">
                        <h2 className="writing-tit">
                            {creation.creation_title}
                        </h2>
                        {page_type==="school" && (
                            <h2 className="writing-tit">
                                [{creation.name}]
                            </h2>
                            // css 수정 필요(제목과 차이 필요)
                        )}
                        <p className="peom-create-date">
                            {printDate(creation.creation_date)}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default WritingList;
