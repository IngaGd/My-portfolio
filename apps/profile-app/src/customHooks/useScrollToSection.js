import { useEffect } from "react";

const useScrollToSection = (className) => {
    useEffect(() => {
        const elements = document.getElementsByClassName(`${className}`);
        if (elements.length > 0) {
            elements[0].scrollIntoView({ behavior: 'smooth' });
        }
    }, [className]);
};


export default useScrollToSection;