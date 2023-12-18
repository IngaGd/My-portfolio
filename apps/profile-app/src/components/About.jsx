import React from 'react';

export default function About() {
    return (
        <div className="about">
            <h2 className="heading-2">About</h2>
            <span className="underline"></span>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut nam
                vero alias qui debitis facere reprehenderit minus magni
                assumenda quia id fuga.
            </p>
            <div className="about__content">
                <div className="about__content--image"></div>
                <div className="about__content--description">
                    <div className="heading-3">Web Developer</div>
                    <div className="personal-info"></div>
                    <div className="text"></div>
                </div>
            </div>
        </div>
    );
}
