import React from 'react';
import '../styles/ContestList.scss';
import { useNavigate } from 'react-router-dom';

const ContestList = () => {
    const navigation = useNavigate();

    const handleEndEvent = () => {
        alert('종료된 콘테스트입니다');
    };

    const handleContestDetail = () => {
        navigation('/individualContest');
    };

    return (
        <>
            <li className="contest">
                <figure>
                    <img
                        src={'/images/test/contest-test-2.svg'}
                        alt="콘테스트1"
                    />
                </figure>
                <dl>
                    <dd className="sub">명작을 다시 AI로 구현해보자!</dd>
                    <dt className="blue-bold">
                        AI로 만든 미술 걸작품 콘테스트
                    </dt>
                    <dd className="date">
                        <em className="start-date">2023.12.01</em> ~
                        <em className="end-date">2023.12.01</em>까지
                    </dd>
                </dl>
                <span className="badge">진행중</span>
            </li>
            <li
                className="contest"
                onClick={handleContestDetail}
            >
                <figure>
                    <img
                        src={'/images/test/contest-test.svg'}
                        alt="콘테스트1"
                    />
                </figure>
                <dl>
                    <dd className="sub">상상력을 더한 나만의 AI 집 만들기!</dd>
                    <dt className="blue-bold">
                        원하는 상상의 집을 만들어볼까요?
                    </dt>
                    <dd className="date">
                        <em className="start-date">2023.12.01</em> ~
                        <em className="end-date">2023.12.01</em>까지
                    </dd>
                </dl>
                <span className="badge">진행중</span>
            </li>
            <li className="contest">
                <figure>
                    <img
                        src={'/images/test/contest-test-3.svg'}
                        alt="콘테스트1"
                    />
                </figure>
                <dl>
                    <dd className="sub">예쁜 아이 옆에 또 예쁜 아이</dd>
                    <dt className="blue-bold">
                        내가 원하는대로 만드는 공주 캐릭터
                    </dt>
                    <dd className="date">
                        <em className="start-date">2023.12.01</em> ~
                        <em className="end-date">2023.12.01</em>까지
                    </dd>
                </dl>
                <span className="badge">진행중</span>
            </li>
            <li
                className="contest end"
                onClick={handleEndEvent}
            >
                <figure>
                    <img
                        src={'/images/test/contest-test-1.svg'}
                        alt="콘테스트1"
                    />
                </figure>
                <dl>
                    <dd className="sub">내가 직접 만드는 나만의 동화책</dd>
                    <dt className="blue-bold">
                        나도 동화 작가! AI 그림동화 만들기
                    </dt>
                    <dd className="date">
                        <em className="start-date">2023.11.01</em> ~
                        <em className="end-date">2023.12.01</em>까지
                    </dd>
                </dl>
                <span className="badge end">종료</span>
            </li>
        </>
    );
};

export default ContestList;
