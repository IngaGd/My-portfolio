import bankImg from '../images/portfolio/bank.png';
import fcAppImg from '../images/portfolio/fc-app.png';
import imageScrollImg from '../images/portfolio/image-scroll.png';
import psoundImg from '../images/portfolio/psound.png';
import simoDelicatessenImg from '../images/portfolio/simo-delicatessen.png';
import weatherAppImg from '../images/portfolio/weather-app.png';
// import natourImg from '../images/portfolio/natour.png';
// import trilloImg from '../images/portfolio/trillo.png';
// import nexterImg from '../images/portfolio/nexter.png';

// https://github.com/IngaGd/simo-delicatessen
// https://github.com/IngaGd/Bank-application
// https://github.com/IngaGd/Nexter
// https://github.com/IngaGd/fc-react-app
// https://github.com/IngaGd/weather-app
// https://github.com/IngaGd/Trillo-CSS
// https://github.com/IngaGd/Natour-CSS
// https://github.com/IngaGd/much-sroll-such-image

const porfolioList = [
    {
        id: '1',
        title: 'Simple bank app',
        image: bankImg,
        description: 'Not a real bank - CRUD and autentication show-of',
        link: 'https://github.com/IngaGd/Bank-application'
    },
    {
        id: '2',
        title: 'p-sound',
        image: psoundImg,
        description: `Freelance project - music producer's portfolio page with custom audio player`,
        link: 'https://p-sound.lt/'
    }
    ,
    {
        id: '3',
        title: 'Image scroll app',
        image: imageScrollImg,
        description: `Infinite image scroll app with 'like' option`,
        link: 'https://github.com/IngaGd/much-sroll-such-image'
    }
    ,
    {
        id: '4',
        title: 'Hystorical weather data app',
        image: weatherAppImg,
        description: 'Weather app with locations on map and graphs',
        link: 'https://github.com/IngaGd/weather-app'
    }
    ,
    {
        id: '5',
        title: 'Lemonades shop app',
        image: simoDelicatessenImg,
        description: 'App with add to cart functionality',
        link: 'https://github.com/IngaGd/simo-delicatessen'
    }
    ,
    {
        id: '6',
        title: 'Fingers crossed app',
        image: fcAppImg,
        description: 'App with CSS animation and count down',
        link: 'https://github.com/IngaGd/fc-react-app'
    }
    ,
    // {
    //     id: '7',
    //     title: 'Natour',
    //     image: natourImg,
    //     description: 'CSS inline-block layout with animation',
    //     link: 'https://github.com/IngaGd/Natour-CSS'
    // },
    // {
    //     id: '8',
    //     title: 'Trillo',
    //     image: trilloImg,
    //     description: 'CSS flexbox layout',
    //     link: 'https://github.com/IngaGd/Trillo-CSS'
    // }
    // ,
    // {
    //     id: '9',
    //     title: 'Nexter',
    //     image: nexterImg,
    //     description: 'CSS grid layout',
    //     link: 'https://github.com/IngaGd/Nexter'
    // }
]

export default porfolioList;