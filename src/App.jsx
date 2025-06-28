import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {QuestProvider} from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';

import {AuthProvider} from './contexts/AuthContext';
import {QuestAuthProvider} from './contexts/QuestAuthContext';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CommunicationReality from './components/CommunicationReality';
import Solution from './components/Solution';
import JohariWindow from './components/JohariWindow';
import Services from './components/Services';
import WhyThisApproach from './components/WhyThisApproach';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Results from './components/Results';
import Background from './components/Background';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import BackToTop from './components/BackToTop';
import FeedbackButton from './components/FeedbackButton';
import HelpHub from './components/HelpHub';
import FAQ from './components/FAQ';

import LoginForm from './components/admin/LoginForm';
import Dashboard from './components/admin/Dashboard';
import QuestLoginPage from './components/auth/QuestLoginPage';
import QuestOnboardingPage from './components/auth/QuestOnboardingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

import {useAuth} from './contexts/AuthContext';
import {useQuestAuth} from './contexts/QuestAuthContext';
import questConfig from './config/questConfig';

function AdminRoute() {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <LoginForm />;
}

function QuestAdminRoute() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <CommunicationReality />
      <Solution />
      <JohariWindow />
      <Services />
      <WhyThisApproach />
      <Testimonials />
      <Experience />
      <Results />
      <Background />
      
      <section id="contact" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600">
              Tell us about your distributed workforce communication challenges
            </p>
          </div>
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
      <AuthProvider>
        <QuestAuthProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Navigation />
                      <HomePage />
                      <Footer />
                      <ChatWidget />
                      <BackToTop />
                      <FeedbackButton />
                      <HelpHub />
                    </>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <>
                      <Navigation />
                      <FAQ />
                      <Footer />
                      <ChatWidget />
                      <BackToTop />
                      <FeedbackButton />
                      <HelpHub />
                    </>
                  }
                />
                <Route path="/admin" element={<AdminRoute />} />
                <Route path="/quest-login" element={<QuestLoginPage />} />
                <Route path="/quest-onboarding" element={<QuestOnboardingPage />} />
                <Route path="/quest-admin" element={<QuestAdminRoute />} />
              </Routes>
            </div>
          </Router>
        </QuestAuthProvider>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;