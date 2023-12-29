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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
                    nam vero alias qui debitis facere reprehenderit minus magni
                    assumenda quia id fuga.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero consectetur sunt vitae ipsa dicta est,
                            eaque excepturi consequatur hic quisquam corporis
                            voluptate iure maxime eos quia maiores a molestias
                            ipsam.
                        </p>
                        <div className="personal-info">
                            <ul className="personal-info--list-left">
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Birthday: </b>1981 11 18
                                    </p>
                                </li>
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
                                        <b>Phone: </b> +370 656 09296
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
                                        <b>Age: </b>42
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Degree: </b>Master
                                    </p>
                                </li>
                                <li className="list-item">
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                    <p>
                                        <b>Email: </b>inga.gudaite@gmail.com
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
                            </ul>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Esse corrupti laborum tempora ducimus maxime
                            nesciunt, magnam consectetur! Voluptatem esse hic
                            sunt, blanditiis ipsam quibusdam sapiente quisquam
                            modi quo aliquid dolorem.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
