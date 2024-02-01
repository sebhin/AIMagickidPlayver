import React, { useState } from 'react';
import '../styles/ClassList.scss';
import { useNavigate } from 'react-router-dom';

const ClassList = ({ classData }) => {
    const navigation = useNavigate();
    // const [openingLessonCheck , setOpeningLessonCheck] = useState({});

    // 전역변수 lesson_id 넘겨주기
    const goMyClass = (lessonId, inclass) => {
        if(inclass)
            navigation(`/classdetail/${lessonId}`);
        else alert("곧 오픈될 예정입니다.")
        // navigation(`/classdetail/${lessonId}`);
    };

    // 챕터별로 데이터 그룹화
    const groupedData = classData.reduce((acc, lesson) => {
        if (!acc[lesson.chapter]) {
            acc[lesson.chapter] = {
                chapter_title: lesson.chapter_title,
                lessons: []
              };
        }
        acc[lesson.chapter].lessons.push(lesson);
        // setOpeningLessonCheck(prevState => {
        //     // 조건에 따라 다른 업데이트 로직
        //     if (Object.keys(lesson.content_json).length === 0) {
        //       return {
        //         ...prevState,
        //         [lesson.lesson_id]: false
        //       };
        //     } else {
        //       // 다른 조건일 때의 로직
        //       return {
        //         ...prevState,
        //         [lesson.lesson_id]: false
        //       };
        //     }
        //   });
        return acc;
    }, {});

    return (
        <>
            {Object.keys(groupedData).map(chapter =>(
                <div
                    className="chapter-container"
                    key={chapter}
                >
                    <p className="chap-tit">
                        {chapter}단원 . {groupedData[chapter].chapter_title}
                    </p>
                    <ul className="chapter-list">
                        {groupedData[chapter].lessons.map((lesson, lessonIndex) => (
                            <li
                                key={lessonIndex}
                                onClick={() => goMyClass(lesson.lesson_id, lesson.inclass)}
                            >
                                <figure> <img className="class-thumb" src={lesson.lesson_image} ></img> </figure>
                                <dl>
                                    <dt>
                                        {lesson.step}장 . {lesson.step_title}
                                    </dt>
                                    {lesson.step_description.map(
                                        (desc, descIndex) => (
                                            <dd key={descIndex}>{desc}</dd>
                                        )
                                    )}
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {/* {Object.entries(groupedData).map(([chapter, lessons], index) => (
                <div
                    className="chapter-container"
                    key={index}
                >
                    <p className="chap-tit">
                        {lessons[0].chapter}단원 . {lessons[0].chapter_title}
                    </p>
                    <ul className="chapter-list">
                        {lessons.map((lesson, lessonIndex) => (
                            <li
                                key={lessonIndex}
                                onClick={() => goMyClass(lesson.lesson_id)}
                            >
                                <figure> <img className="class-thumb" src={lesson.lesson_image} ></img> </figure>
                                <dl>
                                    <dt>
                                        {lesson.step}장 . {lesson.step_title}
                                    </dt>
                                    {lesson.step_description.map(
                                        (desc, descIndex) => (
                                            <dd key={descIndex}>{desc}</dd>
                                        )
                                    )}
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>
            ))} */}
        </>
    );
};

export default ClassList;
