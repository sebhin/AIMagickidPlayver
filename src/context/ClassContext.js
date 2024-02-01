import React, { createContext, useState, useContext } from 'react';

const ClassContext = createContext();

export const useClass = () => useContext(ClassContext);

export const ClassProvider = ({ children }) => {
    const [lessonId, setLessonId] = useState(null);
    const [trainingType, setTrainingType] = useState(null);
    const [trainingId, setTrainingId] = useState(null);
    return (
        <ClassContext.Provider
            value={{
                lessonId,
                setLessonId,
                trainingType,
                setTrainingType,
                trainingId,
                setTrainingId,
            }}
        >
            {children}
        </ClassContext.Provider>
    );
};
