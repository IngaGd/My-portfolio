import bankImgMain from '../images/portfolio/bank/bank-portfolio.png';
import bankImg1 from '../images/portfolio/bank/bank-popup-1.png';
import bankImg2 from '../images/portfolio/bank/bank-popup-2.png';
import bankImg3 from '../images/portfolio/bank/bank-popup-3.png';
import bankImg4 from '../images/portfolio/bank/bank-popup-4.png';
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
        imageMain: bankImgMain,
        images: [
            {
                img: bankImg1,
                title: 'Authorization'
            },
            {
                img: bankImg2,
                title: 'Graph and create account'
            },
            {
                img: bankImg3,
                title: 'Edit account'
            },
            {
                img: bankImg4,
                title: 'Mobile layout'
            }
        ],
        category: 'Full-stack',
        tools: 'JavaScript, React, Express, SASS, XML, MySql, Linux Ubuntu/Apache',
        description: 'Learning project, not a real bank - CRUD and autentication show-of. The project is created to show full-stack developer skils, the user can acces bank page by loging in. UserName can be any, bo sensitive data is required. Functionalities: create account, image upload, edit, delete data, block users, sorting and filtering.',
        link: 'http://wdp.lt:3003/'
    },
    {
        id: '2',
        title: 'p-sound',
        imageMain: psoundImg,
        images: [
            bankImg1,
            bankImg2,
            bankImg3,
            bankImg4,
        ],
        description: `Freelance project - music producer's portfolio page with custom audio player`,
        link: 'https://p-sound.lt/'
    }
    ,
    {
        id: '3',
        title: 'Image scroll app',
        imageMain: imageScrollImg,
        images: [
            bankImg1,
            bankImg2,
            bankImg3,
            bankImg4,
        ],
        description: `Infinite image scroll app with 'like' option`,
        link: 'https://github.com/IngaGd/much-sroll-such-image'
    }
    ,
    {
        id: '4',
        title: 'Hystorical weather data app',
        imageMain: weatherAppImg,
        images: [
            bankImg1,
            bankImg2,
            bankImg3,
            bankImg4,
        ],
        description: 'Weather app with locations on map and graphs',
        link: 'https://github.com/IngaGd/weather-app'
    }
    ,
    {
        id: '5',
        title: 'Lemonades shop app',
        imageMain: simoDelicatessenImg,
        images: [
            {
                img: bankImg1,
                title: 'Authorization'
            },
            {
                img: bankImg2,
                title: 'Graph and create account'
            },
            {
                img: bankImg3,
                title: 'Mobile layout'
            },
            {
                img: bankImg4,
                title: 'Edit account'
            }
        ],
        description: 'App with add to cart functionality',
        link: 'https://github.com/IngaGd/simo-delicatessen'
    }
    ,
    {
        id: '6',
        title: 'Fingers crossed app',
        imageMain: fcAppImg,
        images: [
            bankImg1,
            bankImg2,
            bankImg3,
            bankImg4,
        ],
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