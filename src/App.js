import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styled';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Class from './pages/Class';
import Community from './pages/Community';
import Work from './pages/Work';
import AllContest from './pages/AllContest';
import IndividualContest from './pages/IndividualContest';
import ClassDetail from './pages/ClassDetail';
import DebateModal from './components/DiscussionModal';
import PromptCategory from './pages/PromptCategory';
import Prompt from './pages/Prompt';
import CompleteModal from './components/CompleteModal';
import Main from './pages/Main';
import Loading from './components/Loading';
import { ClassProvider } from './context/ClassContext';
import { WorkProvider } from './context/WorkContext';
import Login from './pages/Login';
import NickName from './pages/NickName';
import TeacherLogin from './pages/TeacherLogin';
import TeacherMain from './pages/TeacerMain';
import Membership from './pages/Membership';
import MembershipComplete from './components/MembershipComplete';
import ErrorModal from './components/ErrorModal';
import LongLoading from './components/LongLoading';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/class"
                    element={
                        <ClassProvider>
                            <Class />
                        </ClassProvider>
                    }
                />
                <Route
                    path="/classdetail/:lessonId"
                    element={
                        <ClassProvider>
                            <ClassDetail />
                        </ClassProvider>
                    }
                />
                <Route
                    path="/promptcategory/:trainingType"
                    element={
                        <ClassProvider>
                            <PromptCategory />
                        </ClassProvider>
                    }
                />
                <Route
                    path="/prompt/:trainingType/:trainingId"
                    element={
                        <ClassProvider>
                            <Prompt />
                        </ClassProvider>
                    }
                />
                <Route
                    path="/allcontest"
                    element={<AllContest />}
                />
                <Route
                    path="/community"
                    element={<Community />}
                />
                <Route
                    path="/navigation"
                    element={<Navigation />}
                />
                <Route
                    path="/work/:pageType"
                    // element={<Work />}
                    element={
                        <WorkProvider>
                            <Work />
                        </WorkProvider>
                    }
                />
                <Route
                    path="/individualContest"
                    element={<IndividualContest />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/nickname"
                    element={<NickName />}
                />
                <Route
                    path="/teacher-login"
                    element={<TeacherLogin />}
                />
                <Route
                    path="/teacher-main"
                    element={<TeacherMain />}
                />
                <Route
                    path="/membership"
                    element={<Membership />}
                />
                <Route
                    path="/commodal"
                    element={<MembershipComplete />}
                />

                <Route
                    path="/debate"
                    element={<DebateModal />}
                />

                <Route
                    path="/complete"
                    element={<CompleteModal />}
                />
                <Route
                    path="/long"
                    element={<LongLoading />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
