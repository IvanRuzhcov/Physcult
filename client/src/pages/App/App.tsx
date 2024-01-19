import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from '../NewsFeed/NewsFeed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/news" element={<NewsFeed />} />
      </Routes>
    </div>
  );
}

export default App;
