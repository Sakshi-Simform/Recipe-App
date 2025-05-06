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
      title: 'Hakka Noodles',
      image: 'https://th.bing.com/th/id/OIP.x_ym2qqYZS81WNfHh1OK4wHaJd?cb=iwc1&rs=1&pid=ImgDetMain',
      shortDescription: 'A flavorful Indo-Chinese noodle dish tossed with crunchy vegetables, soy sauce, and aromatic seasonings for a delightful meal.',
      ingredients: ['Hakka noodles', 'Carrots', 'Bell peppers', 'Cabbage', 'Soy sauce', 'Chili sauce'],
      instructions: 'Boil hakka noodles until they are cooked but firm. Drain and toss in a little oil to prevent sticking. In a pan, stir-fry minced garlic with chopped vegetables. Add soy sauce, chili sauce, vinegar, salt, and pepper. Mix in the cooked noodles and toss well. Garnish with spring onions and serve hot.',
      calories: 137,
      rating: 4.4,
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
  {
    id: 13,
    title: 'Blueberry Smoothie',
    image: 'https://th.bing.com/th/id/OIP.8yCXdQejKrhW3FumeNz7sAHaHa?cb=iwc1&rs=1&pid=ImgDetMain',
    shortDescription: 'A creamy and nutritious smoothie packed with antioxidants from fresh blueberries, blended with yogurt and honey.',
    ingredients: ['Blueberries', 'Banana', 'Yogurt', 'Honey', 'Milk', 'Ice cubes'],
    instructions: 'Blend all ingredients together until smooth. Pour into a glass, garnish with extra blueberries, and enjoy cold.',
    calories: 220,
    rating: 4.3
},
{
  id: 14,
  title: 'Paneer Tikka',
  image: 'https://th.bing.com/th/id/OIP.DH0KMPXHqWYW28hEc7OXLQHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
  shortDescription: 'A delicious Indian appetizer where paneer cubes are marinated in spiced yogurt, grilled to perfection, and served with fresh mint chutney.',
  ingredients: ['Paneer cubes', 'Yogurt', 'Ginger-garlic paste', 'Red chili powder', 'Turmeric', 'Garam masala', 'Lemon juice', 'Salt', 'Oil'],
  instructions: 'Mix yogurt with spices, ginger-garlic paste, and lemon juice. Marinate paneer cubes for at least 30 minutes. Grill or pan-fry until golden brown. Serve hot with mint chutney and onion rings.',
  calories: 320,
  rating: 4.2
},
{
  id: 15,
  title: 'Vegetarian Tacos',
  image: 'https://th.bing.com/th/id/OIP.VxancbRVxPD4EbiFENxF4AHaLG?cb=iwc1&rs=1&pid=ImgDetMain',
  shortDescription: 'Crispy corn tortillas filled with a flavorful mix of beans, grilled veggies, cheese, and fresh salsa.',
  ingredients: ['Corn tortillas', 'Black beans', 'Bell peppers', 'Onions', 'Cheese', 'Lettuce', 'Salsa'],
  instructions: 'Grill bell peppers and onions. Warm up black beans. Assemble tacos by layering beans, grilled veggies, cheese, and lettuce inside the tortillas. Top with fresh salsa and serve.',
  calories: 350,
  rating: 4.5
},
{
  id: 16,
  title: 'Vegetable Sushi Rolls',
  image: 'https://th.bing.com/th/id/OIP.kV7l9H-r724OAJaP32qPbgAAAA?cb=iwc1&rs=1&pid=ImgDetMain',
  shortDescription: 'Delicate sushi rolls made with seasoned rice, crisp vegetables, and wrapped in seaweed.',
  ingredients: ['Sushi rice', 'Nori seaweed', 'Cucumber', 'Carrot', 'Avocado', 'Rice vinegar', 'Soy sauce'],
  instructions: 'Cook sushi rice and season with rice vinegar. Lay a sheet of nori, spread rice, and place sliced cucumber, carrot, and avocado in the center. Roll tightly, slice into pieces, and serve with soy sauce.',
  calories: 320,
  rating: 4.3
},
{
  id: 17,
  title: 'Masala Dosa',
  image: 'https://th.bing.com/th/id/OIP.6Nx_C1m4YCujBiHe48YpHAHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
  shortDescription: 'A crispy, golden-brown dosa stuffed with spiced potato filling, served with coconut chutney and sambar.',
  ingredients: ['Rice', 'Urad dal', 'Potatoes', 'Onions', 'Green chilies', 'Mustard seeds', 'Turmeric', 'Curry leaves', 'Salt', 'Oil'],
  instructions: 'Ferment rice and urad dal batter. Cook potatoes with spices, onions, and mustard seeds for the filling. Spread dosa batter on a pan, cook till crispy, and add potato filling. Fold and serve with chutney and sambar.',
  calories: 150,
  rating: 4.8
},
{
  id: 18,
  title: 'Khaman Dhokla',
  image: 'https://th.bing.com/th/id/OIP.netA-1sRImZbHJVUBxkCPwHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
  shortDescription: 'A soft and fluffy steamed gram flour snack, lightly spiced and garnished with mustard seeds and curry leaves.',
  ingredients: ['Besan (gram flour)', 'Yogurt', 'Turmeric', 'Salt', 'Green chilies', 'Mustard seeds', 'Curry leaves', 'Sugar', 'Lemon juice'],
  instructions: 'Mix besan with yogurt, turmeric, salt, and water into a smooth batter. Steam in a greased dish until cooked. Temper mustard seeds, curry leaves, sugar, and lemon juice, then pour over dhokla. Cut into pieces and serve.',
  calories: 280,
  rating: 4.5
},
{
  id: 19,
  title: 'Chocolate Jar Cake',
  image: 'https://i.pinimg.com/originals/2a/b9/7e/2ab97ef6d5b6476105c8bd99ea8f4f72.jpg',
  shortDescription: 'A rich and indulgent jar cake layered with moist chocolate cake, creamy frosting, and crunchy toppings.',
  ingredients: ['Chocolate sponge cake', 'Whipped cream', 'Chocolate ganache', 'Crushed biscuits or nuts', 'Choco chips', 'Sprinkles (optional)'],
  instructions: 'Crumble chocolate sponge cake into pieces. In a clean jar, layer cake crumbs, whipped cream, and chocolate ganache. Repeat the layers until the jar is full. Top with crushed biscuits, choco chips, and sprinkles. Chill for an hour before serving.',
  calories: 400,
  rating: 4.8
},
{
  id: 20,
  title: 'Oreo Shake',
  image: 'https://lilluna.com/wp-content/uploads/2021/09/oreo-milkshake-resize-3-856x1198.jpg',
  shortDescription: 'A rich and creamy shake made with Oreo cookies blended to perfection with milk and ice cream.',
  ingredients: ['Oreo cookies', 'Cold milk', 'Vanilla ice cream', 'Chocolate syrup (optional)', 'Whipped cream (optional)'],
  instructions: 'Crush Oreo cookies into small pieces. Blend Oreos with cold milk and vanilla ice cream until smooth. Drizzle with chocolate syrup and top with whipped cream, if desired. Serve chilled.',
  calories: 200,
  rating: 4.6
},
];