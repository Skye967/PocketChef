'use client';

import React, { useState } from 'react';

type RecipeModalProps = {
  title: string;
  ingredients: string[];
  instructions: string[];
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
        className='rounded bg-blue-500 px-4 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring'
        onClick={toggleModal}
      >
        View Recipe
      </button>

      {isOpen && (
        <div className='fixed inset-2 z-50 flex  items-center justify-center border align-middle'>
          <div className='max-w-screen z-10 max-h-screen overflow-auto rounded-md border bg-white p-8 shadow-lg'>
            <h2 className='mb-4 text-2xl font-bold'>{title}</h2>

            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-bold'>Ingredients:</h3>
              <ul className='list-disc pl-6'>
                {ingredients.map((ingredient, index) => (
                  <li key={index} className='text-gray-700'>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='mb-2 text-xl font-bold'>Instructions:</h3>
              <ol className='list-disc pl-6'>
                {instructions.map((instruction, index) => (
                  <p key={index} className='text-gray-700'>
                    {index + 1}. {instruction}
                  </p>
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
