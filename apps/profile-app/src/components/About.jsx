import React from 'react';
import image from '../assets/images/profile/profile-7.png';
import { FaChevronRight } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function About({ setSection }) {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setSection('about');
        }
    }, [inView, setSection]);

    return (
        <div className="background white">
            <div className="about u-section-padding" ref={ref}>
                <h2 className="heading-2">About</h2>
                <span className="underline"></span>
                <p className="description">
                    My background in exact sciences has shaped my approach,
                    blending a love for detail with creative thinking. Starting
                    out in the supply chain world, I've taken a big leap to
                    become a programmer, driven by a deep love for learning and
                    growing. Even when I'm not programming, I'm diving into
                    physics, exploring human consciousness - my journey is about
                    never settling, always curious.
                </p>
                <div className="about__content">
                    <div
                        className={`about__content--image ${
                            inView ? 'animated' : ''
                        }`}
                    >
                        <img src={image} alt="Profile" />
                    </div>
                    <div
                        className={`about__content--description ${
                            inView ? 'animated' : ''
                        }`}
                    >
                        <h2 className="heading-3">Full-Stack Developer</h2>
                        <p>
                            Right now, I'm into SASS and React - love seeing my
                            code come to life visually. I've also got a solid
                            grasp on the backend with technologies like Node.js
                            and MariaDB, and more - I have expanded my skills
                            for my freelancing work, getting hands-on with
                            DevOps.
                        </p>
                        <div className="personal-info">
                            <ul className="personal-info--list-left">
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Website: </b>inga-portfolio.lt
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Email: </b>info@inga-portfolio.lt
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>City: </b> Vilnius, Lithuania
                                    </p>
                                </li>
                            </ul>
                            <ul className="personal-info--list-right">
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Degree: </b>Master's
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Freelance: </b>Available
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Full-time work: </b>Available
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="text">
                            In my free time, I love expressing myself through
                            painting and drawing. I also enjoy staying active
                            with gym sessions or embarking on long, reflective
                            walks. Whether I'm sharing laughs with close
                            friends, spending quality time with a significant
                            other, or finding peace in silent meditation, I
                            cherish these moments that enrich my life beyond the
                            screen.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
