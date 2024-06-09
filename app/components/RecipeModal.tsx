'use client';

import React, { useState } from 'react';
import { Recipe } from '../util/constants';

const RecipeModal: React.FC<Recipe> = ({
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
        className='rounded bg-blue-500 px-4 py-2 m-5 text-white focus:border-blue-300 focus:outline-none focus:ring'
        onClick={toggleModal}
      >
        View Recipe
      </button>

      {isOpen && (
        <div className="fixed inset-2 z-50  flex align-middle items-center justify-center">
          <div className="bg-white p-8 rounded-md z-10 max-h-screen max-w-screen overflow-auto border drop-shadow-[0_5.2px_5.2px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-bold'>Ingredients:</h3>
              <ul className='list-disc pl-6'>
                {ingredients!.map((ingredient, index) => (
                  <li key={index} className='text-gray-700'>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='mb-2 text-xl font-bold'>Instructions:</h3>
              <ol className='list-disc pl-6'>
                {instructions!.map((instruction, index) => (
                  <li key={index} className='text-gray-700'>
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            </div>
            <div className='flex justify-center content-center'>
              <button
                className='mt-4 rounded bg-red-500 px-4 py-2 text-white focus:border-red-300 focus:outline-none focus:ring'
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeModal;
