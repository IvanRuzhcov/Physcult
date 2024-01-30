import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
import NavBar from '../Navbar/NavBar';
import OnboardingPage from '../Onboarding/OnbordingPage/OnboardingPage';
import AuthorizationPage from '../Onboarding/Authorization/AuthorizationPage';
import RegistrationPage from '../Onboarding/RegistrationPage/RegistrationPage';
import MainPage from '../Main/MainPage/MainPage';
import TrialsPage from '../Main/TrialsPage/TrialsPage';
import PersonalPage from '../PersonalPage/PersonalPage';
import UserProfileSettings from '../UserProfileSettings/UserProfileSettings';
import FriendsPage from '../Main/FriendsPage/FriendsPage';
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
        <Route path="/main" element={<MainPage />} />
        <Route path="/test" element={<TrialsPage/>}/>
        <Route path="/friend" element={<FriendsPage/>}/>
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
