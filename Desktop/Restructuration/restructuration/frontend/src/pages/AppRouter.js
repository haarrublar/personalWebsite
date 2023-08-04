import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './home/Home';
import About from './about/About';
import Resume from './resume/Resume';


function AppRouter() {
   return (
      <BrowserRouter>

         <Routes>

            <Route path="" element={
               <Home />
            } />

            <Route path="" element={
               <About />
            } />

            <Route path="" element={
               <Resume />
            } />

         </Routes>
         
      </BrowserRouter>
   )
}
export default AppRouter