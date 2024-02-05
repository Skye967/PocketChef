"use client"

import React, { useState } from "react";

type RecipeModalProps = {
  title: string;
  ingredients: string[];
  instructions: string;
};

const RecipeModal: React.FC<RecipeModalProps> = ({
  title,
  ingredients,
  instructions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        onClick={toggleModal}
      >
        View Recipe
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

          <div className="bg-white p-8 max-w-md rounded-md z-10">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
              <ul className="list-disc pl-6">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Instructions:</h3>
              <p className="text-gray-700">{instructions}</p>
            </div>

            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeModal;
