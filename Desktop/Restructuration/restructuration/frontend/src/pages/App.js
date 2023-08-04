
import './../static/css/App.css';
import './../static/css/index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './home/Home';
import About from './about/About';
import Resume from './resume/Resume';




function App() {
  return (
   <>
      <div>
      <Routes>        
         <Route path="/"  element={<Home/>} />
         <Route path="/about"  element={<About />} />
         <Route path="/resume"  element={<Resume />} />
      </Routes>
      </div>
   </>
  );
}

export default App;
