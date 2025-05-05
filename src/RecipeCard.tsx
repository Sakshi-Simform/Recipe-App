import { useState } from 'react';
import './RecipeCard.css';

export interface Recipe {
  id: number | string;
  title: string;
  image: string;
  shortDescription: string;
  calories: number;
  rating: number;
  ingredients: string[];
  instructions: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

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
  const [isFlip, setIsFlipped] = useState<boolean>(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlip);
  };

  return (
    <div className={`recipe-card ${isFlip ? 'flipped' : ''}`} onClick={handleClick} tabIndex={0}>
      <div className="recipe-card-inner">
        {/* Front Side */}
        <div className="recipe-card-front">
          <img src={recipe.image} alt={recipe.title}  loading = "lazy" />

          {/* Info Box */}
          <div className="recipe-info-box">
            <div className="calories">
              <svg className='calorie-logo' width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.4183 21 20 17.6439 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 17.6439 7.58172 21 12 21Z" fill="#1C274C" />
              </svg>
              <p className='calorie-display'>{recipe.calories} kcal</p>
            </div>
            <div className="rating" role='rating-btn'>{renderRating(recipe.rating)}</div>
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

          {/* View Details Navigation */}
          <button
            className="view-details-button"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;