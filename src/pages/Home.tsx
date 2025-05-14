import React, { useState } from 'react';
import { Header } from '../components/Header';
import { RecipeList } from '../components/RecipeList';
import { sampleRecipes } from '../MockData/sampleRecipes';
import type { Recipe } from '../types/recipe.types';
import styles from '../styles/SearchBar.module.css'

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes: Recipe[] = sampleRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearchTerm} />
      {!filteredRecipes.length ? (
        <p className={styles.searchkeyword}>No recipes found for "{searchTerm}". Please try a different keyword.</p>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </>
  );
};
