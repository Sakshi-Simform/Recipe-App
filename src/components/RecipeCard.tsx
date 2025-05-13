import { Recipe } from '../utilities/types';
import calories from '/assets/calories.svg';
import '../styles/RecipeCard.css'

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
  return (
    <div className="recipe-card">
      <div className="flip-inner">
        {/* Front Side */}
        <div className="recipe-card-front">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />

          <div className="recipe-info-box">
            <div className="calories-section">
              <div className="calories">
                <img 
                src={calories}
                alt='calories'
                />
                <p className='calorie-display'>{recipe.calories} kcal</p>
              </div>
            </div>
            <div className="rating" role="rating-btn">{renderRating(recipe.rating)}</div>
          </div>

          <h3 className='front-title'>{recipe.title}</h3>
          <p>{recipe.shortDescription}</p>
        </div>

        {/* Back Side */}
        <div className="recipe-card-back">
          <h3 className='back-title'>{recipe.title}</h3>
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