import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';




const App= ()=> {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} /> 
        
        </Routes>
    </Router>
  );
}

export default App;
