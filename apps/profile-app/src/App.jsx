import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/main.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
// import SideBar from './components/SideBar';
// import About from './pages/About';
// import Contacts from './pages/Contacts';
// import Resume from './pages/Resume';

function App() {
    return (
        <Router>
            <Navigation />
            <div className="container">
                <Home />
                <Portfolio />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
