import React from 'react';
import '../styles/Community.scss';
import Navigation from '../components/Navigation';
import CommunityList from '../components/CommunityList';

const Community = () => {
    return (
        <>
            <section className="contents">
                <div className="left-contents">
                    <Navigation />
                </div>
                <div className="right-contents community">
                    <div className="inner">
                        <div className="tit-container flex">
                            <h3 className="tit">커뮤니티</h3>
                            <div className="btn write-btn">
                                <span>글쓰기</span>
                                <figure>
                                    <img
                                        src={'/images/pencil.svg'}
                                        alt="글쓰기 아이콘"
                                    />
                                </figure>
                            </div>
                        </div>
                        <form
                            className="search-form"
                            method="GET"
                        >
                            <input
                                type="text"
                                name="query"
                                placeholder="검색어를 입력해주세요"
                                required
                            />
                            <button
                                className="btn"
                                type="submit"
                            >
                                검색
                            </button>
                        </form>
                        <ul className="question-list">
                            <CommunityList />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Community;
