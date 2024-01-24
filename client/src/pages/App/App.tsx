import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
import NavBar from '../Navbar/NavBar';
import OnboardingPage from '../Login/OnboardingPage';
import AuthorizationPage from '../Login/AuthorizationPage';
import RegistrationPage from '../Login/RegistrationPage';
import PersonalPage from '../PersonalPage/PersonalPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/profile" element={<PersonalPage />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
