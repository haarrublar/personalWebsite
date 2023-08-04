import React from 'react';
// import { Route, Switch, Link } from 'react-router-dom';

import AuxNavbar from '../navbar/AuxNavbar';
import AboutContent from './AboutContent';
import Footer from '../footer/Footer';



const About = () => {
   
   return (
      <div>
         <AuxNavbar />
         <AboutContent />
         <Footer />
      </div>
   );
};

export default About;