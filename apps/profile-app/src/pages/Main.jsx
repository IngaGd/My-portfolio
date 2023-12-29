import React, { useState } from 'react';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

export default function Main() {
    const [section, setSection] = useState('');

    return (
        <>
            <div className="container">
                <Navigation section={section} />
                <Home setSection={setSection} />
                <About setSection={setSection} />
                <Resume setSection={setSection} />
                <Portfolio setSection={setSection} />
                <Contacts setSection={setSection} />
            </div>
        </>
    );
}
