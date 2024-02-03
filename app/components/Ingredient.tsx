"use client";

import React, { useState, FormEvent } from "react";

type FoodInputComponentProps = {
  onSubmit: (ingredients: string) => void;
};

const Ingredient: React.FC<FoodInputComponentProps> = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(ingredients);
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

export default Ingredient;
