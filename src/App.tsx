import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/Home';
import styles from './styles/App.module.css'
import { RecipeDetails } from './components/RecipeDetails';

export const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};