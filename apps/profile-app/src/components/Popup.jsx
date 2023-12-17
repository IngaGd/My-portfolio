import React from 'react';

export default function Popup() {
    return (
        <div
            // className={route === 'portfolio' ? 'popup none' : 'popup'}
            id="popup"
        >
            <div className="popup__content">
                <div className="popup__images">images</div>
                <div className="popup__description">
                    {/* <button onClick={(_) => setRoute('home')}>X</button> */}
                </div>
            </div>
        </div>
    );
}
