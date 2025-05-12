import  { FC } from 'react';
import {RecipeCard} from '../components/RecipeCard';
import { Recipe } from '../utilities/types';

interface RecipeListProp{
  recipes: Array<Recipe>;
}

export const RecipeList: FC<RecipeListProp> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};