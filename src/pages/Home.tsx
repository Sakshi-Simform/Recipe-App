import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RecipeList } from '../components/RecipeList';
import { sampleRecipes } from '../MockData/sampleRecipes';
import type { Recipe } from '../types/recipe.types';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Array<Recipe>>(sampleRecipes);

  useEffect(() => {
    const filtered = sampleRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
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