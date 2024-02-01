import React, { useState, useEffect } from 'react';
import '../styles/Class.scss';
import Navigation from '../components/Navigation';
import ClassList from '../components/ClassList';

import { getLessonList } from '../api/ClassAPI';
import Floating from '../components/Floating';

const Class = () => {
    // 현재 선택된 단원 상태
    const [selectedChapter, setSelectedChapter] = useState('전체보기');
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        callLessonListAPIFunc();
    }, []);

    const callLessonListAPIFunc = async () => {
        const response = await getLessonList();

        if (response.success) {
            console.log(response.data);
            setClassData(response.data);
        } else {
            console.log(response.error.errMsg);
        }
    };

    // 셀럭트박스 변경 핸들러
    const handleSelectChange = (e) => {
        setSelectedChapter(e.target.value);
    };

    // 필터링된 데이터
    const filteredData = classData.filter((lesson) => {
        if (selectedChapter === '전체보기') return true;
        return `${lesson.chapter}단원` === selectedChapter;
    });

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents class test">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">나의 수업</h3>
                            <select
                                className="options"
                                onChange={handleSelectChange}
                            >
                                <option>전체보기</option>
                                <option>1단원</option>
                                <option>2단원</option>
                                <option>3단원</option>
                                {/* NOTE: 2024.01.09 추후 동적으로 변경 필요 */}
                            </select>
                        </div>
                        <ClassList classData={filteredData} />
                    </div>
                </div>
                {/* 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                <Floating />
            </section>
        </>
    );
};

export default Class;
