import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Work.scss';
import Navigation from '../components/Navigation';
import WorkTabs from '../components/WorkTabs';
import Floating from '../components/Floating';

const Work = () => {
    // 2024-02-08 업데이트 v1
    const isTeacher = localStorage.getItem('isTeacher') === 'true';
    const USER_ID = localStorage.getItem('userID');
    const USER_NAME = localStorage.getItem('userName');
    const { pageType } = useParams();

    // useEffect(() => {
    //     selectRandomImage();
    //     callGreationListAPI();

    // }, [pageType]);

    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents">
                    <div className="inner">
                        {pageType === 'school' && (
                            <>
                                {/* 2024-02-08 업데이트 v1 | 선생님 로그인 시, 인쇄하기 버튼 추가 (school-tit 전체 복붙) */}
                                <div className="school-tit">
                                    <h3 className="tit">
                                        <em className="blue-bold">
                                            {USER_NAME}
                                        </em>{' '}
                                        님의 학교 전체의 멋진 작품들이에요!
                                    </h3>
                                    {isTeacher && (
                                        <button className="print-btn">
                                            <figure>
                                                <img
                                                    src={
                                                        '/images/print-icon.svg'
                                                    }
                                                    alt="print-icon"
                                                />
                                            </figure>
                                            <span>인쇄하기</span>
                                        </button>
                                    )}
                                </div>
                                <WorkTabs page_type={pageType} />
                            </>
                        )}
                        {pageType === 'my' && (
                            <>
                                <h3 className="tit">
                                    <em className="blue-bold">{USER_NAME}</em>{' '}
                                    님의 멋진 작품들이에요!
                                </h3>
                                <WorkTabs page_type={pageType} />
                            </>
                        )}
                    </div>
                </div>
                {/* 2024-02-08 업데이트 v1 | Floating 컴포넌트 추가 */}
                <Floating />
            </section>
        </>
    );
};

export default Work;
