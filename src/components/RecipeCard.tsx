import '../styles/RecipeCard.css'
import { Recipe } from '../utilities/types';

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

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="flip-inner">
        {/* Front Side */}
        <div className="recipe-card-front">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />

          <div className="recipe-info-box">
            <div className="calories">
              <svg className='calorie-logo' width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="#1C274C" />
              </svg>
              <p className='calorie-display'>{recipe.calories} kcal</p>
            </div>
            <div className="rating" role="rating-btn">{renderRating(recipe.rating)}</div>
          </div>

          <h3>{recipe.title}</h3>
          <p>{recipe.shortDescription}</p>
        </div>

        {/* Back Side */}
        <div className="recipe-card-back">
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button className="view-details-button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;