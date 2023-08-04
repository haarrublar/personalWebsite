import React from 'react'
import TwoColumnLayout from '../../components/TwoColumn';


import './../../static/css/accordion.css'


const ResumeContent = () => {
  return (
   <div>
   <div class="Modcontainer text-start" style={{marginTop: '3rem'}}>
      <div style={{marginTop: '2rem'}}></div>
      <h2 class="text-center" style={{fontSize: '32px'}}>Resume</h2>
      <div style={{marginTop: '3rem'}}></div>
      <div class="accordion bg-light" id="accordionPanelsStayOpenExample">
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{fontSize: '24px'}}>
               Overview
               </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
               <div style={{marginTop: '1rem'}}></div>
               <div class="accordion-body text-start">
                  <p>Mathematician graduated from Universidad Nacional de Colombia, and applied statistician and data scientist student at the University of Texas Rio Grande Valley (STEM) with strong mathematical background motivated by machine learning strategies with solid statistical learning techniques. Interested in Artificial Intelligence algorithms for big datasets manipulation in Public Health, Marketing, and Business.</p>

                  <p>I consider myself a committed and dynamic professional who constantly is suited to changes and work environments, maximizing team skills. My training focuses on mathematical and statistical modeling for data analysis interpretation by using descriptive and predictive statistical analysis together with linear methods of regression and classification, unsupervised, and supervised learning.</p>

                  <p>My skills include leadership, strategist, academic planning, analytical thinking, and creative mathematical and statistical problem solving using computer programming in some software. Regarding programming skills, I have used windows or/and ubuntu as operative systems for coding in Python (Machine Learning, AI, TensorFlow, PyTorch), R, Matlab, Microsoft Office Suite (Excel, Word, Onenote, PowerPoint), MongoDB, and SQL. Additionally, I know how to use Python (Django) to build back-end machine learning models and HTML to integrate predictive features and automation into the front-end user interface of websites.</p>
               </div>
               <div style={{marginTop: '1rem'}}></div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{fontSize:'24px'}}>
               Education
               </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2013
                     </p>
                     <p className='colp'>
                        High School. San Pio X High School. Manizales, Caldas, Class 2013.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2019
                     </p>
                     <p className='colp'>
                        BS. Mathematics, National University of Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2021 - present
                     </p>
                     <p className='colp'>
                        MSc. Applied Statistics and Data Science - Candidate, University of Texas Rio Grande Valley.
                     </p>
                  </TwoColumnLayout>
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{fontSize: '24px'}}>
               Seminars & Research Labs
               </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017
                     </p>
                     <p className='colp'>
                        Research Seminar of Statistics, National University of Colombia, Manizales.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017 - 2021
                     </p>
                     <p className='colp'>
                        Research Seedbed "Techniques for Representation of Algebraic Structures", National University of Colombia.
                     </p>
                  </TwoColumnLayout>
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour" style={{fontSize: '24px'}}>
               Academic Participation
               </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2015
                     </p>
                     <p className='colp'>
                        Participant - XX National Congress of Mathematics 2015. Manizales, Caldas, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2016
                     </p>
                     <p className='colp'>
                        Participant - Second Training Courses Focus on Probabilty and Stochastic Process. Bogotá D.C. Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017
                     </p>
                     <p className='colp'>
                        Speaker - A Briefly Introduction to Soliton Theory. XXI National Congress of Mathematics 2017. Bogotá DC, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017
                     </p>
                     <p className='colp'>
                        Participant - Alterman Summer School on Algebraic geometry & Kälher Calculus. The University of Architecture, Civil Engineering and Geodesy. Sofia, Bulgaria.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017
                     </p>
                     <p className='colp'>
                        Participant - Alterman Summer School on Algebraic geometry & Kälher Calculus. The University of Architecture, Civil Engineering and Geodesy. Sofia, Bulgaria.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2018
                     </p>
                     <p className='colp'>
                        Speaker - Characterization of Artin Algebras via Nakayama Algebras. XX Local Encounter of Research Seedbeds, Caldas. Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2018
                     </p>
                     <p className='colp'>
                        Speaker -Finalist - XXII Universitary Mathematical Olympiad of Colombia. Antonio Nariño University. Bogotá DC, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2018
                     </p>
                     <p className='colp'>
                        Speaker - Characterization of Artin algebras using Nakayama Algebras. CIMPA: Geometric and Homological Methods in the Representation Theory of Associative Algebras and Their Applications. University of Antioquia. Medellín, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2018
                     </p>
                     <p className='colp'>
                        Participant - Third International Colloquium on Representations of Algebras and Its Applications: Alexander Zavadskij. Universidad of Antioquia. Medellìn, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <div style={{marginTop: '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive" style={{fontSize: '24px'}}>
               Publication
               </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
               <div class="accordion-body">
                  <div style={{marginTop: '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2018
                     </p>
                     <p className='colp'>
                        Characterization of Artin Algebras Via Nakayama Algebras. Memorias del VIII Encuentro Regional de Semilleros de Investigación - "Estrategia de Investigación Formativa y Apropiación Social del Conocimiento". Edición Electrónica. ISBN:978-958-722-338-5 , http://rredsi.co/?page_id=1024. Pereira, Risaralda, Colombia.
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2023
                     </p>
                     <p className='colp'>
                        Probabilistic solutions of fractional differential and partial differential equations and their Monte Carlo simulations Tamer Oraby, Erwin Suazo, Harrinson Arrubla. Chaos, Solitons & Fractals, Vol. 166, 2023.
                        <ul className="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Developed novel Monte Carlo integration techniques to numerically solve fractional differential equations, enabling simulation of solutions for fractional ordinary and partial differential equations. Derived fundamental solutions for fractional PDEs with Caputo time derivatives and Riesz-Feller space derivatives. Established an alternative approach representing fractional ODE solutions as expected values of random time processes. Applied methods to families of fractional PDEs with variable coefficients, identifying explicit solutions and connecting Lie symmetries to fractional PDEs.</li>
                           <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0960077922010803" class="custom-btn float-end">View more ➨</a></li>
                           <li style={{height: '12px'}}></li>
                        </ul>
                     </p>
                  </TwoColumnLayout>
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix" style={{fontSize: '24px'}}>
               Projects
               </button>
            </h2>
            <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2019
                     </p>
                     <p className='colp'>
                        Matrix Version of the Differentiation Algorithm with Respect to a Suitable Pair.
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Representations of partially ordered sets (posets) over an arbitrary field were introduced by Nazarova and Roiter, including a differentiation algorithm to classify poset representations of width less than or equal to 3. These representations are presented through matrices, transforming the poset representation problem into a matrix problem. This work explains in detail the differentiation algorithm with respect to a convenient pair in its matrix version, and also presents interesting examples.</li>
                           <li style={{height: '15px'}}></li>
                           <li><strong>Skills:</strong></li>
                           <li style={{marginBottom: '5px'}}>Representation Theory | Posets</li> 
                           <li style={{marginBottom: '5px'}}><a href="https://www.sciencedirect.com/science/article/abs/pii/S0960077922010803" class="custom-btn float-end">View more ➨</a></li>
                        </ul>
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2021
                     </p>
                     <p className='colp'>
                        Statistical Learning for Customer Response Modeling in Real-World Marketing Big Dataset.
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Developed models using logistic regression, random forest, and support vector machines to predict high-probability customers for future direct mail marketing campaigns in real-world big data. Trained the models on historical customer response data to identify prospective customers likely to engage positively with future campaigns.</li>
                           <li style={{height: '15px'}}></li>
                           <li><strong>Skills:</strong></li>
                           <li>Statistical Learning | Python (Programming Language) | R (Programming Language)</li>
                        </ul>
                     </p>
                  </TwoColumnLayout>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2021
                     </p>
                     <p className='colp'>
                        Regression and Classification of BIO data on a real-world dataset of resting blood pressure measurements collected longitudinally.
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Utilized SAS software to perform statistical analysis on a real-world dataset of resting blood pressure measurements collected longitudinally. Applied linear regression models to assess the relationship between blood pressure and other variables over time. Additionally, implemented logistic regression techniques to predict the likelihood of hypertension based on input variables. All research was made on SAS programming.</li>
                           <li style={{height: '15px'}}></li>
                           <li><strong>Skills:</strong></li>
                           <li>Statistical Methods | SAS (Programming Language) | R (Programming Language)</li>
                        </ul>
                     </p>
                  </TwoColumnLayout>  
                  <TwoColumnLayout>
                     <p className='colp'>
                        2022
                     </p>
                     <p className='colp'>
                        Fine-Tuning Transformer Networks for Sentiment Analysis with Natural Language Processing (NLP).
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Utilized SAS software to perform statistical analysis on a real-world dataset of resting blood pressure measurements collected longitudinally. Applied linear regression models to assess the relationship between blood pressure and other variables over time. Additionally, implemented logistic regression techniques to predict the likelihood of hypertension based on input variables. All research was made on SAS programming.</li>
                           <li style={{height: '15px'}}></li>
                           <li><strong>Skills:</strong></li>
                           <li>Statistical Methods | SAS (Programming Language) | R (Programming Language)</li>
                        </ul>
                     </p>
                  </TwoColumnLayout>     
                  <TwoColumnLayout>
                     <p className='colp'>
                        2022
                     </p>
                     <p className='colp'>
                        Optimizing Predictive Accuracy for Fatal Heart Failure via Machine Learning.
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Description:</strong></li>
                           <li>Applied penalized regression (lasso and elastic net method), linear regression, and SVM models to predict fatal heart failure using medical records. Tuned models using techniques like lasso regularization and mathematical kernels to optimize predictive accuracy. The lasso model achieved the highest accuracy, demonstrating the capability of sparse linear models for this task. The analysis identified key predictive features - serum creatinine, age, and ejection fraction.</li>
                           <li style={{height: '15px'}}></li>
                           <li><strong>Skills:</strong></li>
                           <li>Python (Programming Language) | R (Programming Language)</li>
                        </ul>
                     </p>
                  </TwoColumnLayout>               
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven" style={{fontSize: '24px'}}>
               Experience
               </button>
            </h2>
            <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2015 - present
                     </p>
                     <p className='colp'>
                        Tutor.
                     </p>
                  </TwoColumnLayout>   
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017 - 2018
                     </p>
                     <p className='colp'>
                        Delegate for Departamental Mathematics Olympiad 2018, National University of Colombia, Manizales.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        2017 - 2019
                     </p>
                     <p className='colp'>
                        Researcher Delegate to Management. Research Seedbed "Techniques for Representation of Algebraic Structures", National University of Colombia, Manizales.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        2020
                     </p>
                     <p className='colp'>
                        Lecturer. Universidad de Caldas. Manizales, Caldas, Colombia.
                        <ul class="noBullets">
                           <li style={{height: '5px'}}></li>
                           <li><strong>Courses:</strong></li>
                           <li>Calcullus II.</li>
                           <li>Fundamentals of Mathematics.</li>
                           <li>Statistics</li>
                        </ul>
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        2021
                     </p>
                     <p className='colp'>
                        Graduate Teaching Assistant (GTA). Applied Statistics and Data Science & Mathematics UTRGV. McAllen, Texas.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        2021
                     </p>
                     <p className='colp'>
                        Vice President. American Statistical Association (ASA) at UTRGV. McAllen, Texas.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        2022
                     </p>
                     <p className='colp'>
                        Research Assistant (RA) for The National Science Foundation (NSF) Research Experience for Undergraduate Students (REU) Program on Applied Mathematics and Computational and Data Science. University of Texas Rio Grande Valley. McAllen, Texas.
                     </p>
                  </TwoColumnLayout> 
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingEight">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight" style={{fontSize: '24px'}}>
               Volunteer
               </button>
            </h2>
            <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        2013 - 2017
                     </p>
                     <p className='colp'>
                        Youth Advisor, Casa Sobre La Roca, Manizales, Colombia.
                     </p>
                  </TwoColumnLayout> 
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingNine">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine" style={{fontSize: '24px'}}>
               Languages
               </button>
            </h2>
            <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        Native
                     </p>
                     <p className='colp'>
                        Spanish.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Professional
                     </p>
                     <p className='colp'>
                        English.
                     </p>
                  </TwoColumnLayout> 
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTen">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen" style={{fontSize: '24px'}}>
               Skills
               </button>
            </h2>
            <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        Languages
                     </p>
                     <p className='colp'>
                        LATEX, Python, C++, Matlab, HTML.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Statistics
                     </p>
                     <p className='colp'>
                        R, SAS.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Frameworks
                     </p>
                     <p className='colp'>
                        PyTorch, Keras, Tensorflow, Django, React.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Database
                     </p>
                     <p className='colp'>
                        MySQL, MongoDB.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Microsoft
                     </p>
                     <p className='colp'>
                        Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft OneNote, Teams.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        UX/UI
                     </p>
                     <p className='colp'>
                        Atomic Design.
                     </p>
                  </TwoColumnLayout> 
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven" style={{fontSize: '24px'}}>
               Graduate Courses
               </button>
            </h2>
            <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEleven">
               <div class="accordion-body">
                  <div style={{marginTop:  '1rem'}}></div>
                  <TwoColumnLayout>
                     <p className='colp'>
                        ML & DL
                     </p>
                     <p className='colp'>
                        Statistical Machine Learning, Data Mining and Warehousing.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Algorithm
                     </p>
                     <p className='colp'>
                        Foundation of Algorithm and Data Structure, Foundation of Software and Programming System.
                     </p>
                  </TwoColumnLayout> 
                  <TwoColumnLayout>
                     <p className='colp'>
                        Math & Stat
                     </p>
                     <p className='colp'>
                        Linear Algebra, Probability & Statistics, Calculus, Mathematical Statistics, Statistical Methods, Analysis, Bio-statistics, Advanced Sampling, Mathematics Modelling, Statistical Learning.
                     </p>
                  </TwoColumnLayout>
                  <div style={{marginTop:  '1rem'}}></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div style={{marginTop: '4rem'}}></div>
   </div>
  );
};

export default ResumeContent;

