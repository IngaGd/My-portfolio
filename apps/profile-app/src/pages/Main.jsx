import React from 'react';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

export default function Main() {
    return (
        <>
            <Navigation />
            <div className="container">
                <Home />
                <About />
                <Resume />
                <Portfolio />
                <Contacts />
            </div>
        </>
    );
}