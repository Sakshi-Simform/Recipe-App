import { Recipe } from "../utilities/utility";

export const sampleRecipes: Array<Recipe> = [
  {
    id: 1,
    title: 'Fudge Brownie',
    image: 'https://th.bing.com/th/id/OIP.JoDAnb_MbFu0XOAAUUVheAHaLH?w=195&h=292&c=7&r=0&o=5&pid=1.7',
    shortDescription: 'Decadent brownies with a rich, chocolatey flavor and a perfectly fudgy texture, ideal for satisfying sweet cravings',
    ingredients: ['Unsalted butter', 'Granulated sugar', 'Cocoa powder', 'All-purpose flour', 'Eggs', 'Vanilla extract', 'Salt'],
    instructions: 'Melt butter, mix with sugar and cocoa powder, add eggs and vanilla extract, fold in flour and salt, pour batter into a greased pan, bake until set but fudgy in the center',
    calories: 350,
    rating: 5
  },
  
  {
    id: 2,
    title: 'Avocado Toast',
    image: 'https://th.bing.com/th/id/OIP.R8Suh3Z4LxZoBorM7nbQcwHaKX?cb=iwc1&rs=1&pid=ImgDetMain',
    shortDescription: 'A simple yet flavorful dish of toasted bread topped with creamy mashed avocado, drizzled with olive oil, and seasoned to perfection',
    ingredients: ['Bread slices', 'Avocado', 'Olive oil', 'Salt', 'Black pepper', 'Lemon juice', 'Red chili flakes (optional)', 'Fresh herbs (optional)'],
    instructions: 'Toast bread, mash avocado with lemon juice, spread avocado on toast, drizzle with olive oil, season with salt and black pepper, and add chili flakes or herbs if desired',
    calories: 250,
    rating: 3
  },

  {
    id: 3,
    title: 'Fluffy Pancake',
    image: 'https://bing.com/th?id=OSK.37ce8f0ab54b2623c67b43cd649a8efb',
    shortDescription: 'A fluffy, golden-brown breakfast classic made from a smooth batter, cooked on a pan, and perfect with sweet or savory toppings',
    ingredients: ['All-Purpose Flour', 'Sugar', 'Baking Powder', 'Salt', 'Nutmeg', 'Milk', 'Pure Vanilla Extract', 'Unsalted Butter'],
    instructions: 'Mix dry ingredients, whisk wet ingredients, combine both until smooth, cook batter on a greased pan, and flip until golden brown',
    calories: 450,
    rating: 3.5
  },
  {
    id: 4,
    title: 'Spaghetti',
    image: 'https://th.bing.com/th/id/OIP.4tWEsBNQcmY7wx_FTPREtwHaLH?rs=1&pid=ImgDetMain',
    shortDescription: 'Italian pasta dish featuring al dente spaghetti, creamy egg-based sauce, crispy pancetta, and a touch of Parmesan cheese and black pepper for a rich and comforting flavor.',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Black pepper'],
    instructions: 'Cook pasta, fry pancetta, mix eggs and cheese, combine everything',
    calories: 400,
    rating: 4.2
  },
  {
    id: 5,
    title: 'Cheese Pizza',
    image: 'https://th.bing.com/th/id/OIP.0xeRXsGv08MKQI_HUFyoTAHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7',
    shortDescription: 'Delightful pizza featuring a crisp crust, rich tomato sauce, and melted mozzarella cheese topped with aromatic herbs',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Olive oil', 'Salt', 'Oregano', 'Fresh basil leaves'],
    instructions: 'Roll out pizza dough, spread tomato sauce, sprinkle mozzarella cheese, season with salt and oregano, drizzle olive oil, bake until crust is golden and cheese is bubbly, garnish with fresh basil leaves before serving',
    calories: 550,
    rating: 4.5
  },

  {
    id: 6,
    title: 'Italian Pasta',
    image: 'https://th.bing.com/th/id/OIP.jgVvC5M8r9zUdR-TGk6wwAHaLH?rs=1&pid=ImgDetMain',
    shortDescription: 'Italian dish where al dente pasta is tossed in a flavorful garlic-tomato sauce and finished with fresh basil and Parmesan for a taste of Italy.',
    ingredients: ['Pasta of choice (e.g., penne or spaghetti)', 'Olive oil', 'Garlic', 'Cherry tomatoes', 'Fresh basil', 'Parmesan cheese', 'Salt', 'Black pepper'],
    instructions: 'Cook pasta until al dente, sauté garlic in olive oil, add cherry tomatoes and cook until soft, toss pasta with the sauce, season with salt and black pepper, garnish with fresh basil and Parmesan cheese',
    calories: 450,
    rating: 3
  },
  {
    id: 7,
    title: 'Iced Latte',
    image: 'https://th.bing.com/th/id/OIP.NcfUfdhzTMIVJcUGYr1B0gHaLG?w=195&h=292&c=7&r=0&o=5&pid=1.7',
    shortDescription: 'A refreshing coffee drink with the perfect balance of bold espresso and creamy milk, served chilled over ice for a cool caffeine boost.',
    ingredients: ['Espresso or strong coffee', 'Cold milk', 'Ice cubes', 'Sugar or sweetener (optional)'],
    instructions: 'Brew espresso or strong coffee, let it cool, fill a glass with ice cubes, pour coffee over ice, add cold milk, and stir. Sweeten as desired',
    calories: 190,
    rating: 2.5
  },
  
  {
    id: 8,
    title: 'Cold Coco',
    image: 'https://ts4.mm.bing.net/th?id=OIP.YR-otJvzz4Q-VazJnXWpGgHaFj&pid=15.1',
    shortDescription: 'A chilled chocolate treat with a rich cocoa flavor, velvety texture, and a hint of sweetness, ideal for warm days',
    ingredients: ['Milk', 'Cocoa powder', 'Sugar', 'Vanilla extract', 'Ice cubes', 'Chocolate syrup (optional)'],
    instructions: 'Mix cocoa powder and sugar with a little milk to form a paste, add remaining milk and vanilla extract, blend with ice cubes until frothy, drizzle with chocolate syrup if desired.',
    calories: 250,
    rating: 4.5
  },

  {
    id: 9,
    title: 'Cheese Burger',
    image: 'https://images.yourstory.com/cs/21/e1da3a20368f11ea8ceed32dbcb77ccc/Imageewvl-1648564249744.jpg',
    shortDescription: 'A hearty sandwich featuring a juicy patty, fresh veggies, melted cheese, and flavorful condiments, all packed between soft toasted buns',
    ingredients: ['Burger buns', 'Ground beef or vegetarian patty', 'Cheese slices', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup', 'Mayonnaise', 'Mustard'],
    instructions: 'Grill or pan-fry the patty, toast burger buns, layer with lettuce, tomato, onion, pickles, and cheese, add condiments like ketchup, mayonnaise, and mustard, assemble and serve',
    calories: 250,
    rating: 3.4
  },
  {
    id: 10,
    title: 'Jamun Shots',
    image: 'https://th.bing.com/th/id/OIP.xIpZ2FPSlxauVo26SJx0lwHaJQ?rs=1&pid=ImgDetMain',
    shortDescription: 'A tangy and vibrant drink made from jamun (Indian blackberry), offering a refreshing burst of flavors with a hint of sweetness and spice',
    ingredients: ['Fresh jamun (Indian blackberry)', 'Black salt', 'Sugar or sweetener (optional)', 'Lemon juice', 'Chilled water or soda'],
    instructions: 'Remove seeds from jamun and mash the pulp. Mix mashed jamun with black salt, sugar, and lemon juice. Add chilled water or soda and stir well. Strain the mixture into shot glasses and serve chilled',
    calories: 350,
    rating: 3
  },

  {
    id: 11,
    title: 'Kit Kat Shake',
    image: 'https://th.bing.com/th/id/OIP.2d3qP_r8zWae8SMEr8WjBQHaHC?rs=1&pid=ImgDetMain',
    shortDescription: 'A deliciously indulgent shake blending the rich flavors of Kit Kat with creamy milk, creating a chocolaty delight perfect for satisfying your sweet cravings',
    ingredients: ['Kit Kat bars', 'Cold milk', 'Vanilla ice cream', 'Whipped cream (optional)', 'Chocolate syrup (optional)'],
    instructions: 'Crush Kit Kat bars into small pieces. In a blender, combine Kit Kat pieces, cold milk, and vanilla ice cream. Blend until smooth. Pour into a glass and top with whipped cream and chocolate syrup, if desired',
    calories: 450,
    rating: 4.5
  },
  {
    id: 12,
    title: 'Veg Cheese Frankie',
    image: 'https://i.pinimg.com/originals/b0/3a/99/b03a99a8a87f4a78fa2282554c633f9a.jpg',
    shortDescription: 'A wholesome and cheesy Indian wrap stuffed with spiced vegetables, tangy sauces, and grated cheese, perfect for a quick and tasty snack',
    ingredients: ['Whole wheat or all-purpose flour tortillas', 'Boiled and mashed potatoes', 'Chopped vegetables (like onion, capsicum, carrots)', 'Spices (e.g., garam masala, chaat masala, red chili powder)', 'Grated cheese', 'Tomato ketchup or chutney', 'Butter or oil'],
    instructions: 'Prepare a spiced vegetable filling by sautéing mashed potatoes and chopped vegetables with spices. Warm tortillas on a pan and spread a layer of ketchup or chutney. Add the vegetable filling and sprinkle grated cheese. Roll the tortilla tightly into a wrap, and cook lightly on a greased pan until golden and crispy. Serve hot.',
    calories: 290,
    rating: 3.5
  },
];