import React from 'react';
import {Link} from 'react-router-dom';



const ResearchContent = () => {
   
   return (
      <div>
         <nav>
            <div class="nav nav-tabs mb-3 justify-content-center" id="nav-tab" role="tablist">
               <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" data-toggle="collapse" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{fontSize: '1.5rem',padding: '10px 20px'}}>Master's</button>
               <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style={{fontSize: '1.5rem',padding: '10px 20px'}}>UNdergrad</button>
            </div>
         </nav>
         <div class="tab-content p-3" id="nav-tabContent">
            <div class="tab-pane fade active show text-start" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
               <p style={{marginTop: '2rem'}}>
                  My <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0960077922010803">Master's thesis research</Link> introduces a new alternative approach for solving fractional ordinary differential equations (FODEs) using expected values of random time processes. Interestingly, we have demonstrated an alternative approach to finding fundamental solutions for fractional partial differential equations (PDEs). By applying Lie symmetries to fractional diffusion PDEs with variable coefficients, we obtained explicit solutions that reveal deep connections between symmetries and fractional PDEs. We anticipate similar results for fractional dispersive equations, which will be explored in future work. Overall, this symmetry-based technique provides new insights into fractional PDEs and enables derives general solutions in closed form.
               </p>
               <p style={{marginTop: '2rem'}}>
                  Our approach leverages Monte Carlo integration to evaluate solutions numerically by implementing GPU computing techniques. We conjecture the solutions found for diffusion equations extend to wider classes of FODEs. An interesting consequence is Lévy flights may emerge from the increased latitude of normal diffusion. The availability of general solutions in closed form is valuable for solving many FODEs efficiently. In summary, combining Monte Carlo methods with Lie symmetries introduces a promising novel paradigm for fractional differential equations. This work is supervised by my knowledgeable advisors <Link to="https://faculty.utrgv.edu/tamer.oraby/index.htm">Dr. Tamer Oraby</Link> (advisor) and <Link to="https://faculty.utrgv.edu/erwin.suazo/">Dr. Erwin Suazo</Link>  (co-advisor).
               </p>
               <button type="submit" class="btn btn-dark float-end" style={{marginTop: '1rem', marginBottom: '1rem'}}>View more ➨</button>
            </div>
            <div class="tab-pane fade text-start" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
               <p style={{marginTop: '2rem'}}>
                  During my undergraduate studies, I conducted a research project on the Representation Theory of Partially Ordered Sets (posets) under the guidance of my advisor Professor Gonzalo Medina, and a fellow student Maria del Rosario. The research was about representations of partially ordered sets (posets) over arbitrary fields were first introduced by Nazarova and Roiter, who developed a differentiation algorithm to classify poset representations of width less than or equal to 3. Their key insight was to represent posets using matrices, transforming the representation problem into a matrix formulation that enables the application of linear algebra techniques. We build on their pioneering work by providing an in-depth explanation of the pairwise differentiation algorithm in its matrix version.
               </p>
               <button type="submit" class="btn btn-dark float-end" style={{marginTop: '1rem', marginBottom: '1rem'}}>View more ➨</button>
            </div>
         </div>
         <div style={{marginTop: '1rem'}}></div>
      </div>
   );
};

export default ResearchContent;



