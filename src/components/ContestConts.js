import React from 'react';
import '../styles/ContestConts.scss';

const ContestConts = ({ creationList, openModal }) => {
    const printDate = (date) => {
        const result_date = date.split('T')
        return result_date[0]
    };

    return (
        <>
        <ul className='conts-list'>
            {creationList.map((creation, index) => (
                <li
                    className="individual-conts"
                    onClick={() => openModal(creation.creation)}
                >
                    <figure className="work-image">
                        <img
                            src={creation.creation}
                            alt={`작품 ${index + 1}`}
                        />
                    </figure>
                    <div className="work-desc">
                        <p className="work-tit">{creation.creation_title}</p>
                        <div className="work-info flex">
                            <p className="worker"> {creation.name} </p> 
                            <p className="work-date">{printDate(creation.creation_date)}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </>
    );
};

export default ContestConts;
