import React from 'react';

import {
    IoHomeSharp,
    IoPersonSharp,
    IoDocumentSharp,
    IoBriefcaseSharp,
} from 'react-icons/io5';

import { FaEnvelope, FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

import image from '../assets/images/profile/profile-2.jpeg';
import { useState } from 'react';
import useScrollToSection from '../customHooks/useScrollToSection';
import { useEffect } from 'react';

export default function Navigation({ section }) {
    const [className, setClassName] = useState('');
    useEffect(() => {
        if (section) {
            setClassName('');
        }
    }, [section]);

    useScrollToSection(className);

    const indicateSection = (e) => {
        setClassName(e);
        console.log('Current className:', e);
    };

    return (
        <div className="navigation">
            <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
            />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__sandwich"></span>
            </label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <div className="navigation__img">
                    <img src={image} alt="Profile" />
                </div>
                <h3 className="navigation__heading">Inga Gudaitė</h3>
                <div className="navigation__socials">
                    <a
                        href="https://www.linkedin.com/in/inga-gudaite/"
                        className="navigation__socials--icon"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/IngaGd/"
                        className="navigation__socials--icon"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://discord.com/users/inga1143"
                        className="navigation__socials--icon"
                    >
                        <FaDiscord />
                    </a>
                </div>
                <div className="navigation__list">
                    <div
                        onClick={(_) => indicateSection('home')}
                        className={
                            className === 'home' || section === 'home'
                                ? 'navigation__item active'
                                : 'navigation__item'
                        }
                    >
                        <IoHomeSharp className="navigation__icon" />
                        <span className="navigation__link">Home</span>
                    </div>
                    <div
                        className={
                            className === 'about' || section === 'about'
                                ? 'navigation__item active'
                                : 'navigation__item'
                        }
                        onClick={(_) => indicateSection('about')}
                    >
                        <IoPersonSharp className="navigation__icon" />
                        <span className="navigation__link">About</span>
                    </div>
                    <div
                        className={
                            className === 'resume' || section === 'resume'
                                ? 'navigation__item active'
                                : 'navigation__item'
                        }
                        onClick={(_) => indicateSection('resume')}
                    >
                        <IoDocumentSharp className="navigation__icon" />
                        <span className="navigation__link">Resume</span>
                    </div>
                    <div
                        className={
                            className === 'portfolio' || section === 'portfolio'
                                ? 'navigation__item active'
                                : 'navigation__item'
                        }
                        onClick={(_) => indicateSection('portfolio')}
                    >
                        <IoBriefcaseSharp className="navigation__icon" />
                        <span className="navigation__link">Portfolio</span>
                    </div>
                    <div
                        className={
                            className === 'contacts' || section === 'contacts'
                                ? 'navigation__item active'
                                : 'navigation__item'
                        }
                        onClick={(_) => indicateSection('contacts')}
                    >
                        <FaEnvelope className="navigation__icon" />
                        <span className="navigation__link">Contacts</span>
                    </div>
                </div>
                <div className="navigation__copyrights">
                    <p className="navigation__copyrights--text">
                        &copy; Copyright Inga Gudaitė
                    </p>
                </div>
            </nav>
        </div>
    );
}
