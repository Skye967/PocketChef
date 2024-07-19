export type Recipe = {
  title: string | null;
  imageUrl: string | null;
  ingredients: string[] | null;
  instructions: string[] | null;
};

export const mealCategories = [
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Lunch', label: 'Lunch' },
  { value: 'Dinner', label: 'Dinner' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Salad', label: 'Salad' },
  { value: 'Sandwich', label: 'Sandwich' },
  { value: 'Appetizer', label: 'Appetizer' },
  { value: 'Soup', label: 'Soup' },
  { value: 'Flatbread', label: 'Flatbread' },
  { value: 'Pasta', label: 'Pasta' }
];

export const dietCategories = [
  { label: 'Low-carb', value: 'low-carb' },
  { label: 'Low-sugar', value: 'low-sugar' },
  { label: 'Low-fat', value: 'low-fat' },
  { label: 'Low-calorie', value: 'low-calorie' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Carnivore', value: 'carnivore' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Gluten-free', value: 'gluten-free' },
  { label: 'Keto', value: 'keto' },
  { label: 'Paleo', value: 'paleo' },
  { label: 'Anti-inflammatory', value: 'anti-inflammatory' },
  { label: 'Atkins', value: 'atkins' },
];

export const amountOfRecipes = [
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '20', value: '20' },
];
