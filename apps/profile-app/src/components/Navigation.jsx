import React from 'react';
// import { Link } from 'react-router-dom';

import {
    IoHomeSharp,
    IoPersonSharp,
    IoDocumentSharp,
    IoBriefcaseSharp,
} from 'react-icons/io5';

import { FaEnvelope, FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

import image from '../assets/images/profile-2.jpeg';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export default function Navigation() {
    const { route, setRoute } = useContext(GlobalContext);
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
                        href="https://www.linkedin.com/in/inga-gudaite/"
                        className="navigation__socials--icon"
                    >
                        <FaDiscord />
                    </a>
                </div>
                <div className="navigation__list">
                    <div className="navigation__item active">
                        <IoHomeSharp className="navigation__icon" />
                        <span
                            onClick={(_) => setRoute('home')}
                            className={
                                route === 'home'
                                    ? 'navigation__link active'
                                    : 'navigation__link'
                            }
                        >
                            Home
                        </span>
                    </div>
                    <div className="navigation__item">
                        <IoPersonSharp className="navigation__icon" />
                        <span
                            onClick={(_) => setRoute('about')}
                            className={
                                route === 'about'
                                    ? 'navigation__link active'
                                    : 'navigation__link'
                            }
                        >
                            About
                        </span>
                    </div>
                    <div className="navigation__item">
                        <IoDocumentSharp className="navigation__icon" />
                        <span
                            onClick={(_) => setRoute('resume')}
                            className={
                                route === 'resume'
                                    ? 'navigation__link active'
                                    : 'navigation__link'
                            }
                        >
                            Resume
                        </span>
                    </div>
                    <div className="navigation__item">
                        <IoBriefcaseSharp className="navigation__icon" />
                        <span
                            onClick={(_) => setRoute('portfolio')}
                            className={
                                route === 'portfolio'
                                    ? 'navigation__link active'
                                    : 'navigation__link'
                            }
                        >
                            Portfolio
                        </span>
                    </div>
                    <div className="navigation__item">
                        <FaEnvelope className="navigation__icon" />
                        <span
                            onClick={(_) => setRoute('contacts')}
                            className={
                                route === 'contacts'
                                    ? 'navigation__link active'
                                    : 'navigation__link'
                            }
                        >
                            Contacts
                        </span>
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
