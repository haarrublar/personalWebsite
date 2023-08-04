import React from 'react';
import {Link} from 'react-router-dom';


import ContactForm from '../forms/ContactForm';



const AuxNavbar = () => {
   return (
      <div class="container navbar-padding text-center" style={{width: '90%', borderBottom: '1.5px solid #213'}}>
         <div class="row align-items-center justify-content-center no-gutters">

            {/* Brand logo */}
            <div class="col-lg-3 col-md-9 col-sm-9 col-xm-6 text-lg-start mb-2 mb-lg-0 order-md-0">
               <Link to="/" class="navbar-brand" style={{fontSize: '28px'}}><b>haarublar's Journal</b></Link>
            </div>

            {/* Navbar links */}
            <div class="col-lg-6 col-md-12 col-sm-9 d-flex justify-content-center mb-2 mb-lg-0 order-md-1">
               <Link to="/" class="mx-1 btn btn-outline-dark">Home</Link>
               <Link to="/about" class="mx-1 btn btn-outline-dark">About</Link>
               <Link to="/resume" class="mx-1 btn btn-outline-dark">Resume</Link>
            </div>

            {/* Get in touch button */}
            <div class="col-lg-2 col-md-3 col-xm-3 mb-2 mb-lg-0 order-md-2">
               <a href="/#" class="btn btn-dark btn-md" data-bs-toggle="modal" data-bs-target="#myModal">Get in touch!➨</a>
            </div>

            <ContactForm />

            {/* Social icons */}
            <div class="col-2 col-md-2 col-lg-1 col-xm-4 text-center colicon order-md-3">
               <a href="https://github.com/haarrublar" className="me-1" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>
               <a href="https://twitter.com/haarrublar" className="me-1" target="_blank" rel="noopener noreferrer" title="X"><i style={{ fontSize: '24px', color: 'black' }} className="fa">&#x1D54F;</i></a>
               <a href="mailto:harrubla.96@gmail.com" className="me-1" target="_blank" rel="noopener noreferrer" title="Email"><i className="fas fa-envelope" style={{ fontSize: '24px', color: 'black' }}></i></a>
               <a href="https://www.linkedin.com/in/harrinsonarrubla/" className="me-1" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="fab fa-linkedin" style={{ fontSize: '24px', color: 'black' }}></i></a>
            </div>

         </div>
      </div>
   );
};

export default AuxNavbar;
