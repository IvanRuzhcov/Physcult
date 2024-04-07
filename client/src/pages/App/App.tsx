import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
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
import Map from '../Map/Map';
import Messenger from '../Messenger/Messenger';
import { RootState, useAppDispatch } from '../../store';
import {
  initPost,
  initSubscribers,
  initSubscription,
  initUserPost,
  initUsers,
  verification,
} from '../PersonalPage/userAuthSlice';
import UserPage from '../UserPage/UserPage';
import MapSettings from '../MapSettings/MapSettings'
import Timer from '../Timer/Timer'
import { initPolar } from '../DevicePage/DeviceSlice';
import PolarPage from '../PolarPage/PolarPage';
import { useSelector } from 'react-redux';
import { initComment, initLike } from '../UserPage/UserPageSlice';
import ChatPage from '../ChatPage/ChatPage';

function App() {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();


  

  useEffect(() => {
    dispatch(verification());
    dispatch(initUserPost());
    dispatch(initPost());
    dispatch(initUsers());
    dispatch(initPolar());
    dispatch(initSubscription(Number(user?.id)));
    dispatch(initSubscribers(Number(user?.id)));
    dispatch(initLike())
    dispatch(initComment())
  }, [dispatch, user?.id]);

  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/trials" element={<TrialsPage />} />
        <Route path="/friend" element={<FriendsPage />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/profile" element={<PersonalPage />} />
        <Route path="profile/:id" element={<UserPage />} />
        <Route path="/settings" element={<UserProfileSettings />} />
        <Route path="/settings/personal" element={<PersonalDataSettings />} />
        <Route path="/settings/device" element={<DevicePage />} />
        <Route path="/settings/device/polar/:id" element={<PolarPage />} />
        <Route path="/settings/interface" element={<InterfacePage />} />
        <Route path="/settings/app information" element={<AppInfoPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map-settings" element={<MapSettings />}/>
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/messenger/:id" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
