import React from 'react';
import MainNavbar from './../navbar/MainNavbar';
import ContactForm from '../forms/ContactForm';

const HeroSection = () => {

   
   return (
      <div className="hero px-4 pb-4 text-center" style={{ borderBottom: '1.5px solid #213' }}>
         <MainNavbar />

         {/* Welcome Message */}
         <div className="row text-center justify-content-center" style={{ width: '100%' }}>
         <div className="col-12">
            <h1>Welcome! 🐑🐐🐑</h1>
         </div>
         </div>

         {/* Description */}
         <div className="row text-center justify-content-center">
         <div className="col-lg-6">
            <p className="lead mb-4">Personal website about my personal research, notebooks, and hobbies. Go on stalk and have fun!</p>
         </div>
         </div>

         {/* Get in Touch Button and Social Icons */}
         <div className="row text-center align-items-center justify-content-center gx-0">
         <div className="col-lg-2 col-md-3 col-6 order-md-0 pb-3 pb-md-2">
            <button className="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#myModal">Get in touch! ➨</button>
         </div>

         <ContactForm />

         {/* Social Icons */}
         <div className="col-lg-1.5 col-md-2 order-md-1 text-center">
            <a href="https://github.com/haarrublar" className="me-1" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>
            <a href="https://twitter.com/haarrublar" className="me-1" target="_blank" rel="noopener noreferrer" title="X"><i style={{ fontSize: '24px', color: 'black' }} className="fa">&#x1D54F;</i></a>
            <a href="mailto:harrubla.96@gmail.com" className="me-1" target="_blank" rel="noopener noreferrer" title="Email"><i className="fas fa-envelope" style={{ fontSize: '24px', color: 'black' }}></i></a>
            <a href="https://www.linkedin.com/in/harrinsonarrubla/" className="me-1" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="fab fa-linkedin" style={{ fontSize: '24px', color: 'black' }}></i></a>
         </div>
         </div>
      </div>
   );
};

export default HeroSection;