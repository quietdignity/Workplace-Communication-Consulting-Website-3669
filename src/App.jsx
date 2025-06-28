import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CommunicationReality from './components/CommunicationReality';
import Solution from './components/Solution';
import JohariWindow from './components/JohariWindow';
import Process from './components/Process';
import Services from './components/Services';
import Packages from './components/Packages';
import WhyThisApproach from './components/WhyThisApproach';
import Experience from './components/Experience';
import Results from './components/Results';
import Background from './components/Background';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import FAQ from './components/FAQ';
import LoginForm from './components/admin/LoginForm';
import Dashboard from './components/admin/Dashboard';
import { useAuth } from './contexts/AuthContext';

function AdminRoute() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
}

function HomePage() {
  return (
    <>
      <Hero />
      <CommunicationReality />
      <Solution />
      <JohariWindow />
      <Process />
      <Services />
      <Packages />
      <WhyThisApproach />
      <Experience />
      <Results />
      <Background />
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
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
                </>
              } 
            />
            <Route 
              path="/admin" 
              element={<AdminRoute />} 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;