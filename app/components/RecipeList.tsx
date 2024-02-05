"use client"

import React from "react";
import RecipeCard from "./RecipeCard";

type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string;
};

type RecipeListComponentProps = {
  recipes: Recipe[] | null;
};

export const RecipeList: React.FC<RecipeListComponentProps> = ({ recipes }) => {
  return (
     <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
       <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
       <div>
         {recipes ? (
          <ul>
            {recipes.map((recipe, i) => (
              <li key={i} className="mb-4">
                <RecipeCard {...recipe} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No recipes available.</p>
        )}
      </div>
     </div>
  )
};
