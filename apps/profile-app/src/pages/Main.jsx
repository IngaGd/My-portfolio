import React from 'react';
import { useState } from 'react';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Popup from '../components/Popup';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

export default function Main() {
    const [visibility, setVisibility] = useState('');

    return (
        <>
            <Navigation />
            <div className="container">
                <Home />
                <About />
                <Resume />
                <Portfolio setVisibility={setVisibility} />
                <Contacts />
                <Popup visibility={visibility} setVisibility={setVisibility} />
            </div>
        </>
    );
}
