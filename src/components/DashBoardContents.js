import React from 'react';
import '../styles/DashBoardContents.scss';
import { useNavigate } from 'react-router-dom';

const DashBoardContents = () => {
    const navigate = useNavigate();
    
    const handleGoClassClick = () => {
        navigate(`/class`);
    };
    return (
        <>
            <li className="conts">
                <div className="tit-container flex">
                    <div className="tit-left">
                        <figure>
                            <img
                                src={'/images/DashBoard/Book.svg'}
                                alt="class-icon"
                            />
                        </figure>
                        <h4>수업현황</h4>
                    </div>
                    <div className="tit-right" onClick={handleGoClassClick} >
                        <p>수업하러 가기</p>
                        <figure>
                            <img
                                src={'/images/chevron-right.svg'}
                                alt="chevron"
                            />
                        </figure>
                    </div>
                </div>
                <p className="sub-tit">이번주의 수업</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>프로그램</th>
                            <th>수업시간</th>
                            <th>장소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AI도구와 친해지기</td>
                            <td>3교시</td>
                            <td>남관3층 과학실</td>
                        </tr>
                    </tbody>
                </table>
                <figure className="class-image">
                    <img
                        src={'/images/test/test-image.svg'}
                        alt="test"
                    />
                </figure>
            </li>
            <li className="conts">
                <div className="tit-container flex">
                    <div className="tit-left">
                        <figure>
                            <img
                                src={'/images/DashBoard/Notification.svg'}
                                alt="Notification-icon"
                            />
                        </figure>
                        <h4>마법콩 현황</h4>
                    </div>
                </div>
                <div className="beans flex">
                    <div className="remain-beans">
                        잔여 콩 :{' '}
                        <span>
                            <em className="blue-bold">100</em>콩
                        </span>
                        <figure>
                            <img
                                src={'/images/bean.svg'}
                                alt="매직콩"
                            />
                        </figure>
                    </div>
                    {/* <p className="btn add-beans">콩 요청</p> */}
                </div>
                <p className="sub-tit">최근 콩 사용 히스토리</p>
                <table className="table beans-table">
                    <thead>
                        <tr>
                            <th>사용날짜</th>
                            <th>사용처</th>
                            <th>사용 콩</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td>-3</td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li className="conts">
                <div className="tit-container flex">
                    <div className="tit-left">
                        <figure>
                            <img
                                src={'/images/DashBoard/Monitoring.svg'}
                                alt="Monitoring-icon"
                            />
                        </figure>
                        <h4>내 질문 리스트</h4>
                    </div>
                </div>
                <table className="table question-table">
                    <thead>
                        <tr>
                            <th>등록날짜</th>
                            <th>제목</th>
                            <th>답변개수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td className="reply">
                                <em>3</em>
                                <span>
                                    <img
                                        src={'/images/chatbubble-ellipses.svg'}
                                        alt="말풍선"
                                    />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td className="reply">
                                <em>3</em>
                                <span>
                                    <img
                                        src={'/images/chatbubble-ellipses.svg'}
                                        alt="말풍선"
                                    />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td className="reply">
                                <em>3</em>
                                <span>
                                    <img
                                        src={'/images/chatbubble-ellipses.svg'}
                                        alt="말풍선"
                                    />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td className="reply">
                                <em>3</em>
                                <span>
                                    <img
                                        src={'/images/chatbubble-ellipses.svg'}
                                        alt="말풍선"
                                    />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2023.12.19</td>
                            <td>그림 만들기</td>
                            <td className="reply">
                                <em>3</em>
                                <span>
                                    <img
                                        src={'/images/chatbubble-ellipses.svg'}
                                        alt="말풍선"
                                    />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li className="conts">
                <div className="tit-container flex">
                    <div className="tit-left">
                        <figure>
                            <img
                                src={'/images/DashBoard/Design.svg'}
                                alt="Design-icon"
                            />
                        </figure>
                        <h4>내 작품 현황</h4>
                    </div>
                    <div className="tit-right">
                        <p>전체보기</p>
                        <figure>
                            <img
                                src={'/images/chevron-right.svg'}
                                alt="chevron"
                            />
                        </figure>
                    </div>
                </div>
                <div className="total">
                    전체작품 <em className="blue-bold">24</em>건
                </div>
                <ul className="work-list">
                    <li className="flex">
                        <p className="left">그림</p>
                        <div className="right">
                            <p>
                                <em className="blue-bold">8</em>건
                            </p>
                            <p className="btn make-painting">그림 만들기</p>
                        </div>
                    </li>
                    <li className="flex">
                        <p className="left">동시</p>
                        <div className="right">
                            <p>
                                <em className="blue-bold">8</em>건
                            </p>
                            <p className="btn make-painting">동시 만들기</p>
                        </div>
                    </li>
                    <li className="flex">
                        <p className="left">그림동화</p>
                        <div className="right">
                            <p>
                                <em className="blue-bold">8</em>건
                            </p>
                            <p className="btn make-painting">동화 만들기</p>
                        </div>
                    </li>
                </ul>
            </li>
        </>
    );
};

export default DashBoardContents;
