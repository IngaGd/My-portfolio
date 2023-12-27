import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLocationDot, FaMobile, FaEnvelope } from 'react-icons/fa6';
import Form from './Form';

export default function Contacts() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    return (
        <div className="background grey">
            <div className="contacts u-section-padding" ref={ref}>
                <h2 className="heading-2">Contacts</h2>
                <span className="underline"></span>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
                    nam vero alias qui debitis facerse reprehenderit minus magni
                    assumenda quia id fuga.
                </p>
                <div
                    className={`contacts__content ${inView ? 'animated' : ''}`}
                >
                    <div className="contacts__details">
                        <div className="contact-info">
                            <span>
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
                            <span>
                                <FaEnvelope className="contact-info__icon" />
                            </span>
                            <div className="contact-info__texts">
                                <p className="contact-info__title">Email: </p>
                                <p>inga.gudaite@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span>
                                <FaMobile className="contact-info__icon" />
                            </span>
                            <div className="contact-info__texts">
                                <p className="contact-info__title">Call: </p>
                                <p>+370 656 09296</p>
                            </div>
                        </div>
                        <div className="contacts__map-box">
                            <iframe
                                src="https://maps.google.com/maps?q=Vilnius&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                frameborder="0"
                                scrolling="no"
                                title="Vilnius City Municipality"
                                allowfullscreen
                                className="map"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contacts__form">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}
