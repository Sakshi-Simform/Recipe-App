import  { FC } from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number | string;
  title: string;
  image: string;
  shortDescription: string;
  calories: number;
  rating: number;
  ingredients: string[];
  instructions: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
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

export default RecipeList;
