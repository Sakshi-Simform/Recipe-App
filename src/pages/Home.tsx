import React, { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { RecipeList } from '../components/RecipeList';
import { sampleRecipes } from '../MockData/sampleRecipes';
import type { Recipe } from '../types/recipe.types';
import styles from '../styles/SearchBar.module.css'

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes: Recipe[] = searchTerm.trim()
    ? sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : sampleRecipes;

  return (
    <MainLayout onSearch={setSearchTerm} showSearch >
      {!filteredRecipes.length ? (
        <p className={styles.searchkeyword}>No recipes found for "{searchTerm}"</p>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </MainLayout>
  );
};
