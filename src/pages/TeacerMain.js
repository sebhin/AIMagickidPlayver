import React from 'react';
import '../styles/TeacherMain.scss';
import Navigation from '../components/Navigation';
import TeacherTab from '../components/TeacherTab';

const TeacherMain = () => {
    // 2024.01.04 | 선생님 테이블 임시 데이터
    const teacherMockData = {
        name: '마수리',
        school_name: '호그와트',
        grade_class: 1,
        number_of_students: 12,
    };

    // 2024.01.04 | 학생 작품 정보 임시 데이터
    const creationMockData = [
        {
            user_id: '1001',
            user_name: '하늘나는 호랑이',
            count_drawing: 33,
            count_writing: 10,
            count_storybook: 20,
            total_quantity: 5000,
        },
        {
            user_id: '1002',
            user_name: '날아가는 송아지',
            count_drawing: 20,
            count_writing: 67,
            count_storybook: 24,
            total_quantity: 2100,
        },
        {
            user_id: '1003',
            user_name: '불타는 태양',
            count_drawing: 22,
            count_writing: 65,
            count_storybook: 38,
            total_quantity: 4300,
        },
        {
            user_id: '1004',
            user_name: '귀여운 자동차',
            count_drawing: 33,
            count_writing: 10,
            count_storybook: 20,
            total_quantity: 2900,
        },
        {
            user_id: '1005',
            user_name: '춤추는 달빛',
            count_drawing: 10,
            count_writing: 8,
            count_storybook: 43,
            total_quantity: 4600,
        },
        {
            user_id: '1006',
            user_name: '맑은 샘물',
            count_drawing: 76,
            count_writing: 8,
            count_storybook: 2,
            total_quantity: 1700,
        },
    ];

    // 2024.01.04 | 우리학교 전체 콩 사용내역 임시데이터
    const allSchoolMockData = [
        {
            user_id: 1007,
            user_name: '하늘을 나는 콩이',
            grade_class: 3,
            history_type: '사용',
            amount: 2,
            usage_description: '편지 써주기',
            history_date: '2024.01.02',
        },
        {
            user_id: 1009,
            user_name: '느린강물',
            grade_class: 1,
            history_type: '사용',
            amount: 2,
            usage_description: '그림 만들기',
            history_date: '2024.01.02',
        },
        {
            user_id: 1008,
            user_name: '바람따라비둘기',
            grade_class: 2,
            history_type: '충전',
            amount: 50,
            usage_description: '마법콩 충전',
            history_date: '2024.01.02',
        },
    ];

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents teacher-main">
                    <div className="inner">
                        <ul className="situation-list">
                            <li>
                                우리반 학생들 작품 수 <em>100</em>개
                            </li>
                            <li>
                                선생님 잔여 콩 <em>30,000</em>개
                            </li>
                        </ul>
                        {/* 2024.01.04 | teacherMockData props 넘겨주기 */}
                        <TeacherTab
                            teacherMockData={teacherMockData}
                            creationMockData={creationMockData}
                            allSchoolMockData={allSchoolMockData}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeacherMain;