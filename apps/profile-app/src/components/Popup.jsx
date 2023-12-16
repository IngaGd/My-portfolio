import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export default function Popup() {
    const { route, setRoute } = useContext(GlobalContext);
    return (
        <div
            className={route === 'portfolio' ? 'popup none' : 'popup'}
            id="popup"
        >
            <div className="popup__content">
                <div className="popup__images">images</div>
                <div className="popup__description">
                    <button onClick={(_) => setRoute('home')}>X</button>
                </div>
            </div>
        </div>
    );
}
