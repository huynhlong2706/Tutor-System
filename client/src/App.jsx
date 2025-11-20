import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components
import HomePage from './components/HomePage'; 
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import SchedulePage from './components/SchedulePage';
import CoursesPage from './components/CoursesPage';
import CourseDetailPage from './components/CourseDetailPage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;