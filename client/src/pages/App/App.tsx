import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
import NavBar from '../Navbar/NavBar';
import OnboardingPage from '../Login/OnboardingPage';
import AuthorizationPage from '../Login/AuthorizationPage';
import RegistrationPage from '../Login/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/reg" element={<RegistrationPage />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
