import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shoes from './pages/Shoes';


function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
