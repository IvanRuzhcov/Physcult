import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';
import NavBar from '../Navbar/NavBar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/news" element={<NewsFeed />} />

      </Routes>
      <NavBar />
    </>
  );
}

export default App;
