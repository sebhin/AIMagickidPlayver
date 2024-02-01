import React, { useEffect, useRef, useState } from 'react';
import '../styles/LongLoading.scss';
import Progress from './Progress';

const LongLoading = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
    const [countDown, setCountDown] = useState(100);
    const [isPlaying, setIsPlaying] = useState(true);

    // 오디오 요소에 대한 참조 생성
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const imageSources = [
        '/images/test/test-1.png',
        '/images/test/test-2.png',
        '/images/test/test-3.png',
        '/images/test/test-4.png',
        '/images/test/test-5.png',
        '/images/test/test-6.png',
    ];

    const handleAudioPlay = () => {
        // audioRef.current.pause();
        //NOTE: 2024-01-23 수정 오디오 on/off 활성화
        setIsPlaying(!isPlaying);
    };

    // 갤러리 랜덤 이미지 출력
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndices((prevIndices) =>
                prevIndices.map((index) => (index + 3) % imageSources.length)
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    // 시계 카운트다운
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);

        if (countDown === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [countDown]);

    return (
        <>
            <section className="long-loading">
                <div className="inner">
                    <figure className="lighting">
                        <img
                            src={'/images/lighting.svg'}
                            alt="lighting"
                        />
                    </figure>
                    <h2 className="loading-tit">
                        친구들의 멋진 작품을 감상하면서 기다려보세요!
                    </h2>
                    <Progress />
                    <div className="clock">
                        <figure>
                            <img
                                src={'/images/clock.svg'}
                                alt="clock"
                            />
                        </figure>
                        <p
                            className={`count-down ${
                                countDown <= 10 ? 'red' : ''
                            }`}
                        >
                            {countDown}
                        </p>
                    </div>
                    <button
                        className="music-play-btn"
                        onClick={handleAudioPlay}
                    >
                        <figure>
                            <img
                                src={
                                    isPlaying
                                        ? '/images/music-on.svg'
                                        : '/images/music-off.svg'
                                }
                                alt="music-play"
                            />
                        </figure>
                    </button>
                    <ul className="gallery-list">
                        {currentIndices.map((index, idx) => (
                            <li
                                className="item"
                                key={idx}
                            >
                                <div className="item-inner">
                                    <figure>
                                        <img
                                            src={imageSources[index]}
                                            alt={`Gallery ${idx + 1}`}
                                        />
                                    </figure>
                                    <div className="desc">
                                        <span className="category">
                                            미래의 내 모습
                                        </span>
                                        <span>
                                            [<em>귀여운 너구리</em>]
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <figure className="people people-1">
                        <img
                            src={'/images/people-1.svg'}
                            alt="people"
                        />
                    </figure>
                    <figure className="people people-2">
                        <img
                            src={'/images/people-2.svg'}
                            alt="people"
                        />
                    </figure>
                    <figure className="people people-3">
                        <img
                            src={'/images/people-3.svg'}
                            alt="people"
                        />
                    </figure>
                </div>
                <div className="gallery-bottom"></div>
            </section>
        </>
    );
};

export default LongLoading;
