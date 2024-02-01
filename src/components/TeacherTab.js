import React, { useState } from 'react';
import '../styles/TeacherTab.scss';

// 2024.01.04 | props 넘겨받은 값으로 변경
const TeacherTab = ({
    teacherMockData,
    creationMockData,
    allSchoolMockData,
}) => {
    // tab active
    const [activeTab, setActiveTab] = useState('tab_1');

    // 선택된 탭 active
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    //NOTE: 2024.01.03 테이블 동적으로 변경 필요

    return (
        <>
            <div className="toggle-tab-list">
                <button
                    onClick={() => handleTabClick('tab_1')}
                    className={`toggle-btn ${
                        activeTab === 'tab_1' ? 'active' : ''
                    }`}
                >
                    우리반 현황
                </button>
                <button
                    onClick={() => handleTabClick('tab_2')}
                    className={`toggle-btn ${
                        activeTab === 'tab_2' ? 'active' : ''
                    }`}
                >
                    우리학교 전체 콩 사용내역
                </button>
            </div>
            <div className="tab-contents">
                {activeTab === 'tab_1' && (
                    <div className="tab-1-conts">
                        <div className="tab-head-conts">
                            <div className="conts-left">
                                <figure></figure>
                                <div className="teacher-info">
                                    <p>
                                        <em>{teacherMockData.school_name}</em>
                                        초등학교
                                        <em>{teacherMockData.grade_class}</em>반
                                    </p>
                                    <h3>
                                        <em>{teacherMockData.name}</em>선생님
                                    </h3>
                                </div>
                            </div>
                            <div className="conts-right">
                                <p>
                                    학급 인원 :
                                    <em>
                                        {teacherMockData.number_of_students}
                                    </em>
                                    명
                                </p>
                            </div>
                        </div>
                        <ul className="table-caption-list">
                            <li>그림</li>
                            <li>동시</li>
                            <li>그림동화</li>
                        </ul>
                        <table className="student-table">
                            <thead>
                                <tr>
                                    <th>이름</th>
                                    <th>그림</th>
                                    <th>글</th>
                                    <th>그림동화</th>
                                    <th>잔여 콩</th>
                                </tr>
                            </thead>
                            <tbody>
                                {creationMockData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.user_name}</td>
                                        <td className="pink">
                                            <span className="pink">
                                                <em>{item.count_drawing}</em>개
                                            </span>
                                        </td>
                                        <td className="yellow">
                                            <span className="yellow">
                                                <em>{item.count_writing}</em>개
                                            </span>
                                        </td>
                                        <td className="green">
                                            <span className="green">
                                                <em>{item.count_storybook}</em>
                                                개
                                            </span>
                                        </td>
                                        <td >
                                            <em className='blue-bold'>{item.total_quantity}</em>개
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'tab_2' && (
                    <div>
                        <table className="all-school-situation">
                            <thead>
                                <tr>
                                    <th>이름</th>
                                    <th>반</th>
                                    <th>마법콩 이력</th>
                                    <th>사용 마법콩</th>
                                    <th>설명</th>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allSchoolMockData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.user_name}</td>
                                        <td>{item.grade_class}반</td>
                                        <td
                                            className={
                                                item.history_type === '사용'
                                                    ? 'text-red'
                                                    : 'text-blue'
                                            }
                                        >
                                            {item.history_type}
                                        </td>
                                        <td
                                            className={
                                                item.history_type === '사용'
                                                    ? 'text-red'
                                                    : 'text-blue'
                                            }
                                        >
                                            {item.history_type === '사용'
                                                ? `-${item.amount}`
                                                : `+${item.amount}`}
                                            개
                                        </td>
                                        <td>{item.usage_description}</td>
                                        <td>{item.history_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default TeacherTab;
// 2024.01.02 | 학생관리 등 선생님 페이지 제작