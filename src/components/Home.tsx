import React, { useState, useEffect } from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import { sampleRecipes } from './sampleRecipe';
import { Recipe } from '../utilities/utility';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Array<Recipe>>(sampleRecipes);

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
      <Header onSearch={setSearchTerm} />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
};

export default HomePage;