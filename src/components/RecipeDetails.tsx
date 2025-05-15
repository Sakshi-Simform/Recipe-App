import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Recipe } from '../types/recipe.types';
import styles from '../styles/RecipeDetails.module.css'

export const RecipeDetails: React.FC = () => {
  const { state } = useLocation();
  const recipe: Recipe | undefined = state;

  if (!recipe) {
    return <div className='recipedata'>No recipe data found.</div>;
  }

  return (
    <>
    {/* display logo and search bar */}
    <Header onSearch={() => {}} /> 

    {/* recipe-details */}
    <div className={styles.recipedetails}>
      <div className={styles.recipecontainer}>
        <div className={styles.detailimage}>
          <img className={styles.recipedetailsimg} src={recipe.image} alt={recipe.title} />
        </div>
        <div className={styles.info}><h2 className={styles.details}>{recipe.title}</h2>
          <p className={styles.details}><strong>Description:</strong> {recipe.shortDescription}</p>
          <p className={styles.details} ><strong>Calories:</strong> {recipe.calories} kcal</p>
          <p className={styles.details}><strong>Rating:</strong> {recipe.rating}/5</p>
          <h3 className={styles.details}>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li className={styles.details} key={index}>{item}</li>
            ))}
          </ul>

          <h3 className={styles.details}>Instructions</h3>
          <p className={styles.details}>{recipe.instructions}</p>
          </div>
      </div>
    </div>
    </>
  );
};