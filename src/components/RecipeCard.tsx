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
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.4183 21 20 17.6439 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 17.6439 7.58172 21 12 21Z" fill="#1C274C"></path> </g></svg>
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