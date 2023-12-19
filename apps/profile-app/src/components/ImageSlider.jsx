import { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';

export default function ImageSlider({ selectedProject }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStiles = {
        backgroundImage: `url(${selectedProject.images[currentIndex].img}) `,
        content: `img`,
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? selectedProject.images.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === selectedProject.images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="image-slider">
            <h6 className="image-slider--title">
                {selectedProject.images[currentIndex].title}
            </h6>
            <div onClick={goToPrevious} className="image-slider__arrow left">
                <FaArrowLeft />
            </div>
            <div onClick={goToNext} className="image-slider__arrow right">
                <FaArrowRight />
            </div>

            <div style={slideStiles} className="image-slider__slide"></div>
            <div className="image-slider__dots">
                {selectedProject.images?.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`dot ${
                            slideIndex === currentIndex ? 'active' : ''
                        }`}
                    >
                        {' '}
                        <FaCircleDot />
                    </div>
                ))}
            </div>
        </div>
    );
}
