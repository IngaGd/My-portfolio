import { useState } from 'react';
import porfolioList from '../assets/data/portfolio';
import Popup from './Popup';

export default function Portfolio() {
    const list = porfolioList;
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectSelection = (project) => {
        setSelectedProject(project);
    };

    const handleColePopup = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section className="portfolio" id="section-portfolio">
                <h2 className="heading-2">Portfolio</h2>
                <span className="underline"></span>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
                    nam vero alias qui debitis facere reprehenderit minus magni
                    assumenda quia id fuga.
                </p>
                <div className="portfolio__content">
                    {list?.map((p) => (
                        <div key={p.id}>
                            <figure className="portfolio__content--item">
                                <img
                                    src={p.imageMain}
                                    alt={p.title}
                                    className="portfolio__content--image"
                                />
                                <figcaption className="portfolio__content--caption">
                                    <h5 className="heading-5">{p.title}</h5>
                                    <button
                                        className="btn"
                                        onClick={() =>
                                            handleProjectSelection(p)
                                        }
                                    >
                                        More about
                                    </button>
                                </figcaption>
                            </figure>

                            {selectedProject && (
                                <Popup
                                    selectedProject={selectedProject}
                                    handleColePopup={handleColePopup}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
