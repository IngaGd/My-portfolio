import React from 'react';

export default function Form() {
    return (
        <div className="form">
            <div className="form__element">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form__element">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form__element">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form__button">
                <button type="submit" className="btn">
                    Send
                </button>
            </div>
        </div>
    );
}
