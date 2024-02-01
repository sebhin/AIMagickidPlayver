import React from 'react';

const DrawingList = ({ creationList, openModal }) => {
    return (
        <ul className="drawing-list">
            {creationList.map((creation, index) => (
                <li key={index}>
                    <img
                        src={creation.creation}
                        alt={`작품 ${index + 1}`}
                        onClick={() => openModal(creation.creation)}
                    />
                </li>
            ))}
        </ul>
    );
};

export default DrawingList;
