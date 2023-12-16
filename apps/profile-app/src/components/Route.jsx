import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Contacts from '../pages/Contacts';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Portfolio from '../pages/Portfolio';
import Popup from './Popup';

export default function Route() {
    const { route } = useContext(GlobalContext);
    switch (route) {
        case 'home':
            return <Home />;
        case 'about':
            return <About />;
        case 'resume':
            return <Resume />;
        case 'portfolio':
            return <Portfolio />;
        case 'contacts':
            return <Contacts />;
        case 'popup':
            return <Popup />;
        default:
            return <Home />;
    }
}
