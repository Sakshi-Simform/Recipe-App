import  { FC } from 'react';
import {RecipeCard} from '../components/RecipeCard';
import type { Recipe } from '../types/recipe.types';
import styles from '../styles/App.module.css'

interface RecipeListProp{
  recipes: Array<Recipe>;
}

export const RecipeList: FC<RecipeListProp> = ({ recipes }) => {
  return (
    <div className={styles.recipelist}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};