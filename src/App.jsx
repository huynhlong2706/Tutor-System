import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components
import HomePage from './components/HomePage'; 
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import SchedulePage from './components/SchedulePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
    </Router>
  );
}

export default App;