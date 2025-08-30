import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/* Pages Import */
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavigationHeader from './reusables/NavigationHeader';
import './index.css';
import './pages.scss';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}


function App() {
  return (
    <Router>
      <NavigationHeader />  
      <AnimatedRoutes />
    </Router>
  );
}

export default App;