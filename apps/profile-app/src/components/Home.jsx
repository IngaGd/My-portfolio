import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home({ setSection }) {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setSection('home');
        }
    }, [inView, setSection]);

    return (
        <>
            <div className="home" ref={ref}>
                <div className="home__text">
                    <h1 className="heading-1">Inga Gudaitė</h1>
                    <div className="home__profesion">
                        <div className="home__word animated">
                            {' '}
                            <div className="sp-1 animated">
                                <p>I</p>
                            </div>
                        </div>
                        <div className="home__word animated">
                            {' '}
                            <div className="sp-2 animated"></div>
                            <div className="sp-3 animated">a</div>
                            <div className="sp-4 animated">m</div>
                        </div>
                        <div className="home__word animated">
                            {' '}
                            <div className="sp-5 animated"></div>
                            <div className="sp-6 animated">a</div>
                            <div className="sp-7 animated"></div>
                        </div>
                        <div className="home__word animated">
                            <div className="sp-8 animated">
                                {' '}
                                <p>D</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-9 animated">
                                {' '}
                                <p>e</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-10 animated">
                                {' '}
                                <p>v</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-11 animated">
                                {' '}
                                <p>e</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-12 animated">
                                <p>l</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-13 animated">
                                <p>o</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-14 animated">
                                <p>p</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-15 animated">
                                {' '}
                                <p>e</p>
                                <span className="underline"></span>
                            </div>
                            <div className="sp-16 animated">
                                <p>r</p>
                                <span className="underline"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
