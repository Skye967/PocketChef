"use client";

import Ingredient from "./components/Ingredient";
import RecipeList from "./components/RecipeList";

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Chicken Stir Fry",
    ingredients: ["Chicken", "Vegetables", "Soy Sauce"],
    instructions: "...",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    ingredients: ["Ground Beef", "Tomato Sauce", "Pasta"],
    instructions: "...",
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    ingredients: ["Dough", "Tomatoes", "Cheese", "Bell Peppers"],
    instructions: "...",
  },
  {
    id: 4,
    name: "Salmon with Lemon Dill Sauce",
    ingredients: ["Salmon", "Lemon", "Dill", "Olive Oil"],
    instructions: "...",
  },
  {
    id: 5,
    name: "Chocolate Chip Cookies",
    ingredients: ["Flour", "Butter", "Sugar", "Chocolate Chips"],
    instructions: "...",
  },
];

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  console.log(process.env.OPENAI_API_KEY)

  const handleDummySubmit = () => {
    //some api stuff
  };

  return (
    <main>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
        <h1 className="text-4xl font-bold text-center">
          Ingredients 2 Recipes
        </h1>
      </div>
      <Ingredient onSubmit={handleDummySubmit} />
      <RecipeList recipes={recipes} />
    </main>
  );
}
