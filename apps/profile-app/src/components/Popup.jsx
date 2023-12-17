import React from 'react';

export default function Popup({ visibility, setVisibility }) {
    return (
        <div className={visibility}>
            <div className="content">
                <div className="images">images</div>
                <div className="description">
                    <button
                        className="btn"
                        onClick={(_) => setVisibility('popup not-visible')}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}
