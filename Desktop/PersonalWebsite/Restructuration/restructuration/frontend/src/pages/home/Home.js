import React from 'react';
import HeroSection from './Hero';
import HomeContent from './HomeContent';
import Footer from '../footer/Footer';


function Home() {
   return (
      <div>
         <HeroSection />
         <HomeContent />
         <Footer />
      </div>
   );
}

export default Home;
