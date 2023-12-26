import React from 'react';
import resumeList from '../assets/data/resume';

export default function Resume() {
    // const list = resumeList;
    return (
        <div className="background grey">
            <div className="resume u-section-padding">
                <h2 className="heading-2">Resume</h2>
                <span className="underline"></span>
                <p className="description">
                    Junior Full-stack web developer specialising in SASS, React,
                    NodeJS and MySQL. Executed and contributed to the full-stack
                    web development projects, with an emphasis on front-end
                    features and micro-services. Currently freelancing, from
                    previous life has stong experiance in management.
                </p>
                <div className="resume__content">
                    {resumeList?.map((r, index) => (
                        <div
                            className={`resume__section--${index + 1}`}
                            key={r.id}
                        >
                            <h3 className="heading-3">{r.sectionTitle}</h3>
                            {r.content?.map((c, index) => (
                                <div className="resume__text" key={index}>
                                    <div className="resume__text--line-left"></div>
                                    <div className="resume__text--column-right">
                                        <div className="resume__text--title">
                                            <span></span>
                                            <h4 className="heading-4">
                                                {c.title}
                                            </h4>
                                        </div>
                                        <p className="resume__text--description">
                                            {c.description}
                                        </p>
                                        <p className="resume__text--date">
                                            {c.date}
                                        </p>
                                        {c.list?.map((l, index) => (
                                            <ul
                                                className="resume__text--list"
                                                key={index}
                                            >
                                                <li className="skills">
                                                    {l.item}
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
