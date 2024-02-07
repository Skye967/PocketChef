"use client";

import React, { useState, FormEvent } from "react";
import { mealCategories, dietCategories } from "../util/constants";



type FoodInputComponentProps = {
  onSubmit: (ingredients: string, mealType: string, numberOfRecipes: string, dietType: string) => void;
};

const RecipeForm: React.FC<FoodInputComponentProps> = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [numberOfRecipes, setNumberOfRecipes] = useState("")
  const [dietType, setDietType] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ingredients) {
      onSubmit(ingredients, mealType, numberOfRecipes, dietType);
    }
    setNumberOfRecipes("")
    setMealType("");
    setIngredients("");
    setDietType("")
    // You can add further logic here, e.g., clearing the input field.
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="ingredients"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Enter Food Ingredients:
        </label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="e.g., chicken, rice, carrots"
          required
        />

        <div className="border m-5"></div>

        <label
          htmlFor="mealCategory"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select a Meal Category:
        </label>
        <select
          id="mealCategory"
          name="mealCategory"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Choose a category</option>
          {mealCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="border m-5"></div>

        <label
          htmlFor="mealCategory"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          How many recipes:
        </label>
        <select
          id="numberOfRecipes"
          name="numberOfRecipes"
          value={numberOfRecipes}
          required
          onChange={(e) => setNumberOfRecipes(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Choose a number</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <div className="border m-5"></div>

        <label
          htmlFor="dietType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select a Diet:
        </label>
        <select
          id="DietType"
          name="DietType"
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Choose a category</option>
          {dietCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="border m-5"></div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
