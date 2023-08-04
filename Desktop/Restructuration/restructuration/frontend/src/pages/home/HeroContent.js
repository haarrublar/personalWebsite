import React from 'react';
import exm1 from './../../static/images/exm1.jpg'


const HeroContent = () => {
   
   return (
      <div class="container">
         <div style={{marginTop: '3rem'}}></div>

         <div class="container">
         <div class="row g-0">
            <div class="col-md-5">
               <img src={exm1}  class="img-fluid rounded d-block mx-auto" alt="..." style={{height: '280px'}}/>
            </div>
            <div class="col-md-7">
               <div class="card-body">
                  <h2 class="card-title">Card title</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
               </div>
            </div>
         </div>
         </div>

         <div style={{marginTop: '3rem'}}></div>

         <div class="container">
         <div class="row">
            <div class="col-md-5">
               <img src={exm1} class="img-fluid rounded d-block mx-auto" alt="..." style={{height: '280px'}}/>
            </div>
            <div class="col-md-7">
               <div class="card-body">
                  <h2 class="card-title">Card title</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
               </div>
            </div>
         </div>
         </div>

         {/* <code-element>
         def parse_string_to_int(string):
            chanr_as_inst = [ord(char) for char in string]
            string = sum(chanr_as_inst)
            return string
         </code-element> */}
      </div>
   );
};

export default HeroContent;