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

export default function SideBar() {
    return (
        <section className="sidebar">
            <div className="sidebar__img">
                <img src={image} alt="Profile" />
            </div>
            <h3 className="sidebar__heading">Inga Gudaitė</h3>
            <div className="sidebar__socials">
                <a
                    href="https://www.linkedin.com/in/inga-gudaite/"
                    className="sidebar__socials--icon"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/IngaGd/"
                    className="sidebar__socials--icon"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/inga-gudaite/"
                    className="sidebar__socials--icon"
                >
                    <FaDiscord />
                </a>
            </div>
            <div className="sidebar__links">
                <Link to="/" className="sidebar__links--link">
                    <IoHomeSharp className="link--icon" /> Home
                </Link>

                <Link to="/about" className="sidebar__links--link">
                    {' '}
                    <IoPersonSharp className="link--icon" /> About
                </Link>

                <Link to="/resume" className="sidebar__links--link">
                    <IoDocumentSharp className="link--icon" /> Resume
                </Link>

                <Link to="/portfolio" className="sidebar__links--link">
                    <IoBriefcaseSharp className="link--icon" />
                    Portfolio
                </Link>

                <Link to="/contacts" className="sidebar__links--link">
                    <FaEnvelope className="link--icon" />
                    Contacts
                </Link>
            </div>
            <div className="sidebar__copyrights">
                &copy; Copyrights Inga Gudaitė
            </div>
        </section>
    );
}
