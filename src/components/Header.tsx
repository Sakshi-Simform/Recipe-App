import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import RecipeList from './RecipeList';
import { sampleRecipes } from './sampleRecipe';
import { Recipe } from '../utilities/utility';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(sampleRecipes);

  useEffect(() => {
    const filtered = sampleRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  }, [searchTerm]);

  return (
    <>
      <header>
        <div className='left-logo'>
          <img
            src='https://img.freepik.com/premium-vector/simple-clean-modern-spoon-restaurant-logo-black-white-color-vector-illustration_969863-11106.jpg'
            className='logo-image'
            alt='logo'
          />
          <h1 id='app-name'>CookBook</h1>
        </div>
        <SearchBar onSearch={setSearchTerm} />
      </header>
      <RecipeList recipes={filteredRecipes} />
    </>
  );
};

export default Header;
