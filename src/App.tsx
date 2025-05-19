import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { RecipeDetails } from './components/RecipeDetails';
import { Header } from './components/Header';
import styles from './styles/App.module.css';

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className={styles.app}>
        <Header onSearch={setSearchTerm} showSearch={true} />

        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};