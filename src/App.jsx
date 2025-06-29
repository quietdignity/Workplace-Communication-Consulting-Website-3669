import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CommunicationReality from './components/CommunicationReality';
import Solution from './components/Solution';
import JohariWindow from './components/JohariWindow';
import WorkplaceMappingMethodology from './components/WorkplaceMappingMethodology';
import Services from './components/Services';
import WhyThisApproach from './components/WhyThisApproach';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Results from './components/Results';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import BackToTop from './components/BackToTop';
import FeedbackButton from './components/FeedbackButton';
import HelpHub from './components/HelpHub';
import FAQ from './components/FAQ';

import questConfig from './config/questConfig';

function HomePage() {
  return (
    <>
      <Hero />
      <CommunicationReality />
      <Solution />
      <JohariWindow />
      <WorkplaceMappingMethodology />
      <Services />
      <WhyThisApproach />
      <Testimonials />
      <Experience />
      <Results />
      <section id="contact" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
    </>
  );
}

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={
              <>
                <Navigation />
                <HomePage />
                <Footer />
                <ChatWidget />
                <BackToTop />
                <FeedbackButton />
                <HelpHub />
              </>
            } />
            <Route path="/faq" element={
              <>
                <Navigation />
                <FAQ />
                <Footer />
                <ChatWidget />
                <BackToTop />
                <FeedbackButton />
                <HelpHub />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </QuestProvider>
  );
}

export default App;