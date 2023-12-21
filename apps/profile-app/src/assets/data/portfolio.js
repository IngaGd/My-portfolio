import bankImgMain from '../images/portfolio/bank/bank-portfolio.png';
import bankImg1 from '../images/portfolio/bank/bank-popup-1.png';
import bankImg2 from '../images/portfolio/bank/bank-popup-2.png';
import bankImg3 from '../images/portfolio/bank/bank-popup-3.png';
import bankImg4 from '../images/portfolio/bank/bank-popup-4.png';
import fcAppImg from '../images/portfolio/fc-app.png';
import imageScrollMain from '../images/portfolio/image-scroll/image-scroll-portfolio.png';
import imageScrollImg1 from '../images/portfolio/image-scroll/image-scroll-1.png';
import imageScrollImg2 from '../images/portfolio/image-scroll/image-scroll-2.png';
import imageScrollImg3 from '../images/portfolio/image-scroll/image-scroll-3.png';
import psoundImgMain from '../images/portfolio/p-sound/psound-portfolio.png';
import psoundImg1 from '../images/portfolio/p-sound/psound-1.png';
import psoundImg2 from '../images/portfolio/p-sound/psound-2.png';
import psoundImg3 from '../images/portfolio/p-sound/psound-3.png';
import psoundImg4 from '../images/portfolio/p-sound/psound-4.png';
import simoDelicatessenImg from '../images/portfolio/simo-delicatessen.png';
import weatherAppImgMain from '../images/portfolio/weather-app/weather-app-portfolio.png';
import weatherAppImg1 from '../images/portfolio/weather-app/weather-app-1.png';
import weatherAppImg2 from '../images/portfolio/weather-app/weather-app-2.png';
import weatherAppImg3 from '../images/portfolio/weather-app/weather-app-3.png';
import weatherAppImg4 from '../images/portfolio/weather-app/weather-app-4.png';
// import natourImg from '../images/portfolio/natour.png';
// import trilloImg from '../images/portfolio/trillo.png';
// import nexterImg from '../images/portfolio/nexter.png';

const porfolioList = [
    {
        id: '1',
        title: 'Simple bank app',
        imageMain: bankImgMain,
        images: [
            {
                img: bankImg1,
                title: 'Authorization functionality'
            },
            {
                img: bankImg2,
                title: 'Graph and create account functionality'
            },
            {
                img: bankImg3,
                title: 'Edit account funtionality, filter and sort'
            },
            {
                img: bankImg4,
                title: 'Respinsive design'
            }
        ],
        category: 'Full-stack',
        tools: 'JavaScript, React, Express, SASS, XML, MySql, Git, Linux Ubuntu',
        description: 'Learning project, not a real bank - CRUD and autentication demonstration. The project is created to show full-stack developer skills, the user can access bank page by loging in. User name can be any, no sensitive data is required. Functionalities: create account, image upload, edit, delete data, block users, sorting and filtering.',
        link: 'http://wdp.lt:3003/'
    },
    {
        id: '2',
        title: 'p-sound',
        imageMain: psoundImgMain,
        category: 'Full-stack',
        tools: 'JavaScript, React, Express, SASS, XML, SendGrid, Git, Linux Ubuntu',
        images: [
            {
                img: psoundImg1,
                title: 'Header scroll to top apparance'
            },
            {
                img: psoundImg2,
                title: 'Custom audio player'
            },
            {
                img: psoundImg3,
                title: 'Form integration'
            },
            {
                img: psoundImg4,
                title: 'Respinsive design'
            }
        ],
        description: `Freelance project - music producer's portfolio page with custom audio player. Project made from scratch to deployment into hosting server and with ssl integration. Project's functionalities: responsive design, audio player, sroll-to top header appearnce, form integration with SendGrid.`,
        link: 'https://p-sound.lt/'
    }
    ,
    {
        id: '3',
        title: 'Image scroll app',
        imageMain: imageScrollMain,
        category: 'Front-end',
        tools: 'JavaScript, React, SASS, XML, Pexels API, Git',
        images: [
            {
                img: imageScrollImg1,
                title: 'Image fetch from Pexels'
            },
            {
                img: imageScrollImg2,
                title: 'Favourite image option'
            }, {
                img: imageScrollImg3,
                title: 'Responsive design'
            }
        ],
        description: `Infinite image scroll app with 'like' option, project is created with Pexels API integration, favourite and unfavourite funtionality integration with localstorage. Created GitHub page.`,
        link: 'https://github.com/IngaGd/much-sroll-such-image'
    }
    ,
    {
        id: '4',
        title: 'Hystorical weather data app',
        imageMain: weatherAppImgMain,
        category: 'Front-end',
        tools: 'JavaScript, React, React-chart, Leaflet, UUID, Open-meteo, SASS, XML, Git',
        images: [
            {
                img: weatherAppImg1,
                title: 'Map integration'
            },
            {
                img: weatherAppImg2,
                title: 'Marker for points on map'
            },
            {
                img: weatherAppImg3,
                title: 'Weather option selection'
            },
            {
                img: weatherAppImg4,
                title: 'Wether option graphical display'
            }
        ],
        description: 'Weather app with locations on map selection, weather options choosal and graphical representation.  Data is fetched from open source API - open-meteo, map is integrated with Leaflet lybrary and graphs with react-graph. Created GitHub page.',
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