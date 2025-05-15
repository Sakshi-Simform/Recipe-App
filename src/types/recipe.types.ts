export interface Recipe {
    id: number | string;
    title: string;
    image: string;
    shortDescription: string;
    calories: number;
    rating: number;
    ingredients: Array<string>;
    instructions: string;
  }