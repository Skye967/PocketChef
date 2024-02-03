"use client"

import React from "react";

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

type RecipeListComponentProps = {
  recipes: Recipe[];
};

const RecipeList: React.FC<RecipeListComponentProps> = ({ recipes }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className="mb-4">
              <strong className="text-lg">{recipe.name}</strong>
              <p className="text-gray-700">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-700">
                Instructions: {recipe.instructions}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No recipes available.</p>
      )}
    </div>
  );
};

export default RecipeList;
