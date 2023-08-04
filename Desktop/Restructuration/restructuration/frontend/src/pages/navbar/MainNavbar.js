import React from 'react';
import {Link} from 'react-router-dom';



const MainNavbar = () => {
   return (
      <div className="container navbar-padding" style={{ width: '90%' }}>
         <div className="row align-items-center">
         <div className="col-md-12 col-lg-3">
            <Link to="/" type="button" className="navbar-brand h2" role="presentation" style={{fontSize:'30px'}}>
               <b>haarublar's Journal</b>
            </Link>
         </div>
         <div className="col-md-12 col-lg-6 d-flex justify-content-center mt-2 mt-lg-0">
            <div className="col-auto nav-item">
               <Link to="/" type="button" className="mx-1 btn btn-outline-dark">
               Home
               </Link>
            </div>
            <div className="col-auto nav-item">
               <Link to="/about" type="button" className="mx-1 btn btn-outline-dark">
               About
               </Link>
            </div>
            <div className="col-auto nav-item">
               <Link to="/resume" type="button" className="mx-1 btn btn-outline-dark">
               Resume
               </Link>
            </div>
         </div>
         </div>
      </div>
   );
};

export default MainNavbar;
