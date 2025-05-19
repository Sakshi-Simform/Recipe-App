import React from 'react';
import { RecipeList } from '../components/RecipeList';
import { sampleRecipes } from '../MockData/sampleRecipes';
import type { Recipe } from '../types/recipe.types';
import styles from '../styles/SearchBar.module.css';

interface HomePageProps {
  searchTerm: string;
}

export const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const filteredRecipes: Recipe[] = searchTerm.trim()
    ? sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : sampleRecipes;

  return (
    <>
      {!filteredRecipes.length ? (
        <p className={styles.searchkeyword}>No recipes found for "{searchTerm}"</p>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </>
  );
};