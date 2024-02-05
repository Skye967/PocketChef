"use client"

import React from "react";
import RecipeModal from "./RecipeModal";

type RecipeCardProps = {
  title: string;
  ingredients: string[];
  instructions: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  ingredients,
  instructions,
}) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <RecipeModal
        title={title}
        ingredients={ingredients}
        instructions={instructions}
      />
    </div>
  );
};

export default RecipeCard;
