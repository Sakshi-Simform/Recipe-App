import React from 'react';
import { useLocation } from 'react-router-dom';
import { Recipe } from '../utilities/types';

export const RecipeDetails: React.FC = () => {
  const { state } = useLocation();
  const recipe: Recipe | undefined = state;

  if (!recipe) {
    return <div>No recipe data found.</div>;
  }

  return (
    <div className="recipe-details">
      <div className="recipe-container">
        <div className='detail-image'>
          <img className='recipe-details-img' src={recipe.image} alt={recipe.title} />
        </div>
        <div className='info'><h2 className='details'>{recipe.title}</h2>
          <p className='details'><strong>Description:</strong> {recipe.shortDescription}</p>
          <p className='details' ><strong>Calories:</strong> {recipe.calories} kcal</p>
          <p className='details'><strong>Rating:</strong> {recipe.rating}/5</p>

          <h3 className='details'>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li className='details' key={index}>{item}</li>
            ))}
          </ul>

          <h3 className='details'>Instructions</h3>
          <p className='details'>{recipe.instructions}</p></div>

      </div>

    </div>
  );
};