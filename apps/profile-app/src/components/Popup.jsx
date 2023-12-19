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
                    <button className="btn" onClick={handleColePopup}>
                        Close
                    </button>
                    <h2 className="heading-2">{selectedProject.title}</h2>
                    <p className="description">{selectedProject.description}</p>
                    <a href={selectedProject.link}>GitHub link</a>
                </div>
            </div>
        </div>
    );
}
