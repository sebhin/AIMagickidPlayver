import React, { createContext, useState, useContext } from 'react';

const WorkContext = createContext();

export const useWork = () => useContext(WorkContext);

export const WorkProvider = ({ children }) => {
    const [pageType, setPageType] = useState(null);
    return (
        <WorkContext.Provider
            value={{
                pageType,
                setPageType,
            }}
        >
            {children}
        </WorkContext.Provider>
    );
};
