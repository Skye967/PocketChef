'use client';

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../util/constants';

type RecipeListComponentProps = {
  recipes: Recipe[] | null;
};

export const RecipeList: React.FC<RecipeListComponentProps> = ({ recipes }) => {

  return (
    <div className='mx-auto mt-8 max-w-md rounded bg-white p-4 shadow-md overflow-scroll'>
      <h2 className='mb-4 text-2xl font-bold'>Recipe List</h2>
      <div>
        {recipes ? (
          <ul>
            {recipes.map((recipe, i) => {
              return(
              <li key={i} className='mb-4'>
                <RecipeCard {...recipe} />
              </li>
            )})}
          </ul>
        ) : (
          <span className='text-gray-700'>No recipes available.</span>
        )}
      </div>
    </div>
  );
};
