export type Recipe = {
  title: string | null;
  imageUrl: string | null;
  ingredients: string[] | null;
  instructions: string[] | null;
};

export const mealCategories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Salad',
  'Sandwich',
  'Appetizer',
  'Soup',
  'Flatbread',
  'Pasta',
];

export const dietCategories = [
  'Low-carb',
  'Low-sugar',
  'Low-fat',
  'Low-calorie',
  'Vegan',
  'Carnivore',
  'Vegetarian',
  'Gluten-free',
  'keto',
  'Paleo',
  'Anti-inflammatory',
  'Atkins',
];

export const test = '';
