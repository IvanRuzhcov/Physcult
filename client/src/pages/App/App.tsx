import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
import NavBar from '../Navbar/NavBar';
import OnboardingPage from '../Login/OnboardingPage';
import AuthorizationPage from '../Login/AuthorizationPage';
import RegistrationPage from '../Login/RegistrationPage';
import PersonalPage from '../PersonalPage/PersonalPage';
import UserProfileSettings from '../UserProfileSettings/UserProfileSettings';
import PersonalDataSettings from '../PersonalDataSettings/PersonalDataSettings';
import DevicePage from '../DevicePage/DevicePage';
import InterfacePage from '../InterfacePage/InterfacePage';
import AppInfoPage from '../AppInfoPage/AboutAppPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/profile" element={<PersonalPage />} />
        <Route path="/settings" element={<UserProfileSettings />} />
        <Route path="/settings/personal" element={<PersonalDataSettings />} />
        <Route path="/settings/device" element={<DevicePage />} />
        <Route path="/settings/interface" element={<InterfacePage />} />
        <Route path="/settings/app information" element={<AppInfoPage />} />
      </Routes>
      
    </>
  );
}

export default App;
