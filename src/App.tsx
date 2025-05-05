import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import SearchBar from './searchBar';
import RecipeDetails from './RecipeDetails';
import './App.css';
import { sampleRecipes } from './sampleRecipe';
import { Recipe } from './RecipeCard'; 

const App: React.FC = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(sampleRecipes);

  const handleSearch = (searchTerm: string) => {
    const filtered = sampleRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <div className='left-logo'>
            <img
              src='https://img.freepik.com/premium-vector/simple-clean-modern-spoon-restaurant-logo-black-white-color-vector-illustration_969863-11106.jpg'
              className='logo-image'
              alt='logo'
            />
            <h1 id='app-name'>CookBook</h1>
          </div>
          <SearchBar onSearch={handleSearch} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList recipes={filteredRecipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;