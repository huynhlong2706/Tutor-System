import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components
import HomePage from './components/HomePage'; 
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;