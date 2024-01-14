import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
    FaLocationDot,
    FaDiscord,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa6';
// import Form from './Form';

export default function Contacts({ setSection }) {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setSection('contacts');
        }
    }, [inView, setSection]);

    return (
        // <div className="background grey">
        //     <div className="contacts u-section-padding" ref={ref}>
        //         <h2 className="heading-2">Contacts</h2>
        //         <span className="underline"></span>
        //         <p className="description">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //             Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
        //             nam vero alias qui debitis facerse reprehenderit minus magni
        //             assumenda quia id fuga.
        //         </p>
        //         <div
        //             className={`contacts__content ${inView ? 'animated' : ''}`}
        //         >
        //             <div className="contacts__details">
        //                 <div className="contact-info">
        //                     <span>
        //                         <FaLocationDot className="contact-info__icon" />
        //                     </span>
        //                     <div className="contact-info__texts">
        //                         <p className="contact-info__title">
        //                             Location:{' '}
        //                         </p>
        //                         <p>Vilnius, Lithuania</p>
        //                     </div>
        //                 </div>
        //                 <div className="contact-info">
        //                     <span>
        //                         <FaEnvelope className="contact-info__icon" />
        //                     </span>
        //                     <div className="contact-info__texts">
        //                         <p className="contact-info__title">Email: </p>
        //                         <p>inga.gudaite@gmail.com</p>
        //                     </div>
        //                 </div>
        //                 <div className="contact-info">
        //                     <span>
        //                         <FaMobile className="contact-info__icon" />
        //                     </span>
        //                     <div className="contact-info__texts">
        //                         <p className="contact-info__title">Call: </p>
        //                         <p>+370 656 09296</p>
        //                     </div>
        //                 </div>
        //                 <div className="contacts__map-box">
        //                     <iframe
        //                         src="https://maps.google.com/maps?q=Vilnius&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        //                         frameborder="0"
        //                         scrolling="no"
        //                         title="Vilnius City Municipality"
        //                         allowfullscreen
        //                         className="map"
        //                     ></iframe>
        //                 </div>
        //             </div>
        //             <div className="contacts__form">
        //                 <Form />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="background grey">
            <div className="contacts u-section-padding" ref={ref}>
                <h2 className="heading-2">Contacts</h2>
                <span className="underline"></span>
                <p className="description">
                    If you are interested in cooperation, please find my
                    contacts below.
                </p>
                <div
                    className={`contacts__content ${inView ? 'animated' : ''}`}
                >
                    <div className="contacts__details">
                        <div className="text">
                            <div className="contact-info">
                                <span className="icon">
                                    <FaLocationDot className="contact-info__icon" />
                                </span>

                                <div className="contact-info__texts">
                                    <p className="contact-info__title">
                                        Location:{' '}
                                    </p>
                                    <p>Vilnius, Lithuania</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <a
                                    href="https://www.linkedin.com/in/inga-gudaite/"
                                    className="icon"
                                >
                                    <FaLinkedin className="contact-info__icon" />
                                </a>
                                <div className="contact-info__texts">
                                    <p className="contact-info__title">
                                        LinkedIn:{' '}
                                    </p>
                                    <a href="https://www.linkedin.com/in/inga-gudaite/">
                                        linkedin.com/in/inga-gudaite
                                    </a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <a
                                    href="https://discord.com/users/inga1143"
                                    className="icon"
                                >
                                    <FaDiscord className="contact-info__icon" />
                                </a>
                                <div className="contact-info__texts">
                                    <p className="contact-info__title">
                                        Discord:{' '}
                                    </p>
                                    <a href="https://discord.com/users/inga1143">
                                        discord.com/users/inga1143
                                    </a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <a
                                    href="https://github.com/IngaGd"
                                    className="icon"
                                >
                                    <FaGithub className="contact-info__icon" />
                                </a>
                                <div className="contact-info__texts">
                                    <p className="contact-info__title">
                                        GitHub:{' '}
                                    </p>
                                    <a href="https://github.com/IngaGd">
                                        github.com/IngaGd
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="contacts__map-box">
                            <iframe
                                src={mapSrc}
                                frameBorder="0"
                                scrolling="no"
                                title="Vilnius City Municipality"
                                allowFullScreen
                                className="map"
                            ></iframe>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
