import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Recipe } from '../types/recipe.types';
import styles from '../styles/RecipeDetails.module.css'

export const RecipeDetails: React.FC = () => {
  const { state } = useLocation();
  const recipe: Recipe | undefined = state;

  return (
    <>
      {/* Only display the logo, not the search bar */}
      <Header onSearch={() => {}} showSearch={false} /> 

      {/* recipe-details */}
      <div className={styles.recipeDetails}>
        <div className={styles.recipeContainer}>
          {recipe ? (
            <>
              <div className={styles.detailImage}>
                <img className={styles.recipeDetailsImg} src={recipe.image} alt={recipe.title} />
              </div>
              <div className={styles.info}>
                <h2 className={styles.titleDetails}>{recipe.title}</h2>
                <p className={styles.description}><strong>Description:</strong> {recipe.shortDescription}</p>
                <p className={styles.description}><strong>Calories:</strong> {recipe.calories} kcal</p>
                <p className={styles.description}><strong>Rating:</strong> {recipe.rating}/5</p>
                <h3 className={styles.details}>Ingredients</h3>
                <ul>
                  {recipe.ingredients.map((item, index) => (
                    <li className={styles.listDetails} key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className={styles.details}>Instructions</h3>
                <p className={styles.instructions}>{recipe.instructions}</p>
              </div>
            </>
          ) : (
            <div className={styles.recipeData}>No recipe data found.</div>
          )}
        </div>
      </div>
    </>
  );
};
