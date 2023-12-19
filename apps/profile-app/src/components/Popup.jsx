import React from 'react';

export default function Popup({ handleColePopup, selectedProject }) {
    return (
        <div className="popup">
            <div className="popup__content">
                <button className="btn" onClick={handleColePopup}>
                    Close
                </button>
                <h2 className="heading-2">{selectedProject.title}</h2>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <p className="description">{selectedProject.description}</p>
                <a href={selectedProject.link}>GitHub link</a>
            </div>
        </div>
    );
}
