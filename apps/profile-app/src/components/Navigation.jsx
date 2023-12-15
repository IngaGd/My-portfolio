import React from 'react';
import { Link } from 'react-router-dom';

import {
    IoHomeSharp,
    IoPersonSharp,
    IoDocumentSharp,
    IoBriefcaseSharp,
} from 'react-icons/io5';

import { FaEnvelope, FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

import image from '../assets/images/profile-2.jpeg';

export default function Navigation() {
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
                        <Link to="/" className="navigation__link">
                            Home
                        </Link>
                    </div>
                    <div className="navigation__item">
                        <IoPersonSharp className="navigation__icon" />
                        <Link to="/about" className="navigation__link">
                            About
                        </Link>
                    </div>
                    <div className="navigation__item">
                        <IoDocumentSharp className="navigation__icon" />
                        <Link to="/resume" className="navigation__link">
                            Resume
                        </Link>
                    </div>
                    <div className="navigation__item">
                        <IoBriefcaseSharp className="navigation__icon" />
                        <Link to="/portfolio" className="navigation__link">
                            Portfolio
                        </Link>
                    </div>
                    <div className="navigation__item">
                        <FaEnvelope className="navigation__icon" />
                        <Link to="/contacts" className="navigation__link">
                            Contacts
                        </Link>
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
