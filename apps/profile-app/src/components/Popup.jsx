import React from 'react';
import ImageSlider from './ImageSlider';

export default function Popup({ handleColePopup, selectedProject }) {
    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__content--left">
                    <ImageSlider selectedProject={selectedProject} />
                </div>
                <div className="popup__content--right">
                    <h3 className="heading-4">{selectedProject.title}</h3>
                    <div className="project-info">
                        <h6 className="heading-6">Project information:</h6>
                        <div className="project-info__category">
                            Category: {selectedProject.category}
                        </div>
                        <div className="project-info__tools">
                            Tools: {selectedProject.tools}
                        </div>
                        <div className="project-info__link">
                            Prpject URL: {selectedProject.link}
                        </div>
                    </div>
                    <p className="description">
                        <b>Description:</b> {selectedProject.description}
                    </p>
                    <button className="btn" onClick={handleColePopup}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
