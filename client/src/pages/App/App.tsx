import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnboardingPage from '../Login/OnboardingPage';
import AuthorizationPage from '../Login/AuthorizationPage';
import RegistrationPage from '../Login/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<AuthorizationPage/>}/>
        <Route path="/reg" element={<RegistrationPage/>}/>
      </Routes>
    </>
  );
}

export default App;
