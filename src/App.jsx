import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CommunicationReality from './components/CommunicationReality';
import Solution from './components/Solution';
import JohariWindow from './components/JohariWindow';
import Process from './components/Process';
import Packages from './components/Packages';
import WhyThisApproach from './components/WhyThisApproach';
import Experience from './components/Experience';
import Results from './components/Results';
import Background from './components/Background';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CommunicationReality />
      <Solution />
      <JohariWindow />
      <Process />
      <Packages />
      <WhyThisApproach />
      <Experience />
      <Results />
      <Background />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;