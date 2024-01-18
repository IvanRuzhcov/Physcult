import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnboardingPage from '../Login/OnboardingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
      </Routes>
    </>
  );
}

export default App;
