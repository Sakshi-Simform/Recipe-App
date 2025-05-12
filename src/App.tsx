import React from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;