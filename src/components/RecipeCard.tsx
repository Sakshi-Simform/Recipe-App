import { useNavigate } from 'react-router-dom';
import type { Recipe } from '../types/recipe.types';
import calorieslogo from '/assets/calories.svg';
import styles from '../styles/RecipeCard.module.css'

interface RecipeCardProps {
  recipe: Recipe;
}

// rating section
const renderRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<span key={`full-${i}`}>&#9733;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<span key={`empty-${i}`}>&#9734;</span>);
  }

  return starIcons;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.recipecard}>
      <div className={styles.flipinner}>
        {/* Front Side */}
        <div className={styles.recipecardfront}>
          <img src={recipe.image} alt={recipe.title} loading="lazy" />

          <div className={styles.recipeinfobox}>
            <div className={styles.caloriessection}>
              <div className={styles.calories}>
                <img
                  className={styles.caloriesvg}
                  src={calorieslogo}
                  alt='calories'
                />
                <p className={styles.caloriedisplay}>{recipe.calories} kcal</p>
              </div>
            </div>
            <div className={styles.rating} role="rating-btn">{renderRating(recipe.rating)}</div>
          </div>

          <h3 className={styles.fronttitle}>{recipe.title}</h3>
          <p>{recipe.shortDescription}</p>
        </div>

        {/* Back Side */}
        <div className={styles.recipecardback}>
          <h3 className={styles.backtitle}>{recipe.title}</h3>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button
            className={styles.viewdetailsbutton}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/recipe/${recipe.id}`, { state: recipe });
            }}
          >View Details</button>
        </div>
      </div>
    </div>
  );
};