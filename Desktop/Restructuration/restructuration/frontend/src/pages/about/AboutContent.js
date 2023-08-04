import React, { useState } from 'react';

import exm1 from './../../static/images/exm1.jpg';
import PersonalContent from './PersonalContent';
import ResearchContent from './ResearchContent';



const AboutContent = () => {
  const [activeTab, setActiveTab] = useState(null); // Set initial active tab to null

  const handleTabClick = (tab) => {
    // Toggle tab content when clicking on the same tab again
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
   <div class="container  text-start" style={{width: '75%'}}>

      <div class="card p-2 border-0" style={{marginTop: '3rem'}}>

         <div class="row" style={{marginBottom: '2rem'}}>
            <div class="col-12">
               <img src={exm1}  class="img-fluid rounded d-block mx-auto" alt="..." style={{height: '280px'}}/>
            </div>
         </div>
         <div class="row text-center" style={{marginBottom: '1rem'}}>
            <div class="col-12">
               <h2 style={{fontSize: '32px'}}>Harrinson Arrubla</h2>
            </div>
         </div>   
         <div class="row align-items-center" style={{marginBottom: '1.5rem'}}>
            <div class="col-9 col-md-7 col-xl-6 mx-auto">
               <p class="text-justify text-center" style={{fontSize: '18px'}}>
                  <em>«I do not desire to be a milestone in history. I prefer to sit in front of the piano to blunder.»</em> - Fito Paez.
               </p>
            </div>
         </div> 
         <p class="text-start">
            I'm Harrinson Arrubla, a Colombian mathematician who graduated from the <a href="https://unal.edu.co/">Universidad Nacional de Colombia</a> (UN - best public university ever!). Currently, I'm wrapping up a Master's degree in Applied Statistics and Data Science at <a href="https://www.utrgv.edu/">The University of Texas Rio Grande Valley</a>. 
            My research interests are on graph theory, statistical learning and modelling, machine learning and geometry. 
         </p>
         <p class="text-start">
            I'm not only a professional, student and researcher, but also a husband and father. My family is the core of my life. Entrepreneurship is a passion of mine, and Birdyback represents a dream realized after two years of hard-work, creativity and sacrifice.
         </p>
         <div style={{marginTop: '3rem'}}></div>
      </div>
      <div className="tabs-container"  style={{marginBottom: '2.5rem'}}>
         <ul className="nav nav-pills" style={{marginBottom: '1rem'}}>
            <li className="nav-item mb-3">
               <button
               className={`btn large-button btn-outline-dark shadow-none ${activeTab === 'personal' ? 'active' : ''}`}
               onClick={() => handleTabClick('personal')}
               style={{fontSize: '1.5rem',padding: '10px 20px'}}
               >
               Personal
               </button>
            </li>
            <li className="nav-item" style={{marginLeft: '.5rem'}}>
               <button
               className={`btn large-button btn-outline-dark shadow-none ${activeTab === 'research' ? 'active' : ''}`}
               onClick={() => handleTabClick('research')}
               style={{fontSize: '1.5rem',padding: '10px 20px'}}
               >
               Research
               </button>
            </li>
         </ul>      
         <PersonalContent />
      </div>
      <div className="tab-content">
         <div className={`tab-pane fade ${activeTab === 'personal' ? 'show active' : ''}`} id="personal">
            <PersonalContent />
         </div>
         <div className={`tab-pane fade ${activeTab === 'research' ? 'show active' : ''}`} id="research">
            <ResearchContent />
         </div>
      </div>
   </div>
   );
};

export default AboutContent;






      // <div class="container text-center" style={{width: '75%'}}>
      //    <div style={{marginTop: '3rem'}}></div>
      //    <div class="card p-3 border-0">
      //       <div class="row">
      //          <div class="col-12">
      //             <img src={exm1}  class="img-fluid rounded d-block mx-auto" alt="..." style={{height: '280px'}}/>
      //          </div>
      //       </div>
      //       <div style={{marginTottom: '2rem'}}></div>
      //       <div class="row">
      //          <div class="col-12">
      //             <h2 style={{fontSize: '32px'}}>Harrinson Arrubla</h2>
      //          </div>
      //       </div>   
      //       <div style={{marginTop: '1rem'}}></div>
      //       <div class="row align-items-center">
      //          <div class="col-9 col-md-7 col-xl-6 mx-auto">
      //             <p class="text-justify text-center" style={{fontSize: '18px'}}>
      //                <em>«I do not desire to be a milestone in history. I prefer to sit in front of the piano to blunder.»</em> - Fito Paez.
      //             </p>
      //          </div>
      //       </div> 
      //       <div style={{marginTottom: '2rem'}}></div>
      //          <p class="text-start" style={{fontSize: '18px'}}>
      //             I'm Harrinson Arrubla, a Colombian mathematician who graduated from the <a href="https://unal.edu.co/">Universidad Nacional de Colombia</a> (UN - best public university ever!). Currently, I'm wrapping up a Master's degree in Applied Statistics and Data Science at <a href="https://www.utrgv.edu/">The University of Texas Rio Grande Valley</a>. 
      //             My research interests are on graph theory, statistical learning and modelling, machine learning and geometry. 

      //             I'm not only a professional, student and researcher, but also a husband and father. My family is the core of my life. Entrepreneurship is a passion of mine, and Birdyback represents a dream realized after two years of hard-work, creativity and sacrifice.
      //          </p>
      //          <h2 class="text-start" style={{marginTop: '1rem'}}>Research</h2> 
      //       <div style={{marginTop: '3rem'}}></div>
      //       <nav> 
      //          <div class="nav nav-tabs active mb-3 justify-content-left no-border" id="nav-tab" style={{borderBottom: 'none'}}> 
      //             <button class={`nav-link color-div btn ${showPersonal ? 'active' : ''}`} onclick={handlePersonalToggle} type="button" data-bs-toggle="collapse" data-bs-target="#personal" aria-controls="Personal" style={{backgroundColor: '#E5E5E5'}}>Personal</button>
      //             <button class={`nav-link color-div btn ${showResearch ? 'active' : ''}`} onclick={handleResearchToggle} type="submit" data-bs-toggle="collapse" data-bs-target="#collapseResearch"  aria-controls="Research" style={{backgroundColor: '#E5E5E5', marginLeft: '1px'}}>Research</button>
      //          </div> 
      //       </nav>
      //       <p class="text-start" style={{marginBottom: '3rem', marginTop: '1rem', fontSize: '18px'}}>
      //          Here, you'll find a recap about my research projects in my bachelor and master's degree. If you want to continue, just click on "view more ➨" for checking notes and codes snippets. 
      //       </p>
      //       <div className={`collapse ${showPersonal ? 'show' : ''}`} id="personal" style={{marginBottom: '3rem'}}>
      //          <p style={{fontSize: '18px !important'}}>
      //             Here, you'll find a recap about my research projects in my bachelor and master's degree. If you want to continue, just click on "view more ➨" for checking notes and codes snippets. 
      //          </p>
      //          <div id="personalID"></div>
      //       </div>
      //       <div className={`collapse ${showResearch ? 'show' : ''}`} id="collapseResearch">
      //          <nav>
      //             <div class="nav nav-tabs mb-3 justify-content-center" id="nav-tab" role="tablist">
      //                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" data-toggle="collapse" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Master's</button>
      //                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UNdergrad</button>
      //             </div>
      //          </nav>
      //          <div class="tab-content p-3" id="nav-tabContent">
      //             <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      //                <p class="text-start" style={{fontSize: '18px', marginTop: '2rem'}}>
      //                   My <a href="https://www.sciencedirect.com/science/article/abs/pii/S0960077922010803">Master's thesis research</a> introduces a new alternative approach for solving fractional ordinary differential equations (FODEs) using expected values of random time processes. Interestingly, we have demonstrated an alternative approach to finding fundamental solutions for fractional partial differential equations (PDEs). By applying Lie symmetries to fractional diffusion PDEs with variable coefficients, we obtained explicit solutions that reveal deep connections between symmetries and fractional PDEs. We anticipate similar results for fractional dispersive equations, which will be explored in future work. Overall, this symmetry-based technique provides new insights into fractional PDEs and enables derives general solutions in closed form.
 
      //                   Our approach leverages Monte Carlo integration to evaluate solutions numerically by implementing GPU computing techniques. We conjecture the solutions found for diffusion equations extend to wider classes of FODEs. An interesting consequence is Lévy flights may emerge from the increased latitude of normal diffusion. The availability of general solutions in closed form is valuable for solving many FODEs efficiently. In summary, combining Monte Carlo methods with Lie symmetries introduces a promising novel paradigm for fractional differential equations. This work is supervised by my knowledgeable advisors <a href="https://faculty.utrgv.edu/tamer.oraby/index.htm">Dr. Tamer Oraby</a> (advisor) and <a href="https://faculty.utrgv.edu/erwin.suazo/">Dr. Erwin Suazo</a>  (co-advisor).
      //                </p>
      //                <button type="submit" class="btn btn-dark float-end" style={{marginTop: '1rem', marginBottom: '1rem'}}>View more ➨</button>
      //             </div>
      //             <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      //                <p class="text-start" style={{fontSize: '18px', marginTop: '2rem'}}>During my undergraduate studies, I conducted a research project on the Representation Theory of Partially Ordered Sets (posets) under the guidance of my advisor Professor Gonzalo Medina, and a fellow student Maria del Rosario. The research was about representations of partially ordered sets (posets) over arbitrary fields were first introduced by Nazarova and Roiter, who developed a differentiation algorithm to classify poset representations of width less than or equal to 3. Their key insight was to represent posets using matrices, transforming the representation problem into a matrix formulation that enables the application of linear algebra techniques. We build on their pioneering work by providing an in-depth explanation of the pairwise differentiation algorithm in its matrix version.</p>
      //                <button type="submit" class="btn btn-dark float-end" style={{marginTop: '1rem', marginBottom: '1rem'}}>View more ➨</button>
      //             </div>
      //          </div>
      //          <div style={{marginTop: '1rem'}}></div>
      //       </div>
      //    </div>
      // </div> 

