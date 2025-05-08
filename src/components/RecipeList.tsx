import  { FC } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../utilities/utility';

interface RecipeListProps {
  recipes: Array<Recipe>;
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
