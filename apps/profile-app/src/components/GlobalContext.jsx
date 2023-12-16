import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [route, setRoute] = useState('home');

    return (
        <GlobalContext.Provider value={{ route, setRoute }}>
            {children}
        </GlobalContext.Provider>
    );
};
