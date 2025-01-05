import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../styles/index.css';

import App from './App.jsx';
import Wave from '../pages/Wave.jsx';
import Headline from '../pages/Headline.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wave" element={<Wave />} />
      <Route path="/headline" element={<Headline />} />
    </Routes>
  </Router>
)
