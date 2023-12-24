import React from 'react';

import { FaLocationDot, FaMobile, FaEnvelope } from 'react-icons/fa6';

export default function Contacts() {
    return (
        <div className="background grey">
            <div className="contacts u-section-padding">
                <h2 className="heading-2">Contacts</h2>
                <span className="underline"></span>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
                    nam vero alias qui debitis facerse reprehenderit minus magni
                    assumenda quia id fuga.
                </p>
                <div className="contacts__content">
                    <div className="contacts__content--details">
                        <div className="contact-info">
                            <span>
                                <FaEnvelope />
                            </span>
                            <div>
                                <p>Location: </p>
                                <p>
                                    Rinktinės Street 3A/77, Vilnius, LT09234,
                                    Lithuania
                                </p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span>
                                <FaLocationDot />
                            </span>
                            <div>
                                <p>Email: </p>
                                <p>inga.gudaite@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span>
                                <FaMobile />
                            </span>
                            <div>
                                <p>Call: </p>
                                <p>+370 656 09296</p>
                            </div>
                        </div>
                        <div className="map"></div>
                    </div>
                    <div className="contacts__content--form">form</div>
                </div>
            </div>
        </div>
    );
}
