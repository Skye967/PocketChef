'use client';

import React, { useState } from 'react';
import RecipeModal from './RecipeModal';
import { Recipe } from '../util/constants';

type RecipeCardProps = {
  title: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
};

const RecipeCard: React.FC<Recipe> = ({
  title,
  ingredients,
  instructions,
  imageUrl,
}) => {

  return (
    <div className='relative mx-auto mt-8 max-w-md rounded bg-white p-4 shadow-md'>
      <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
      {imageUrl && <img src={imageUrl} alt={title ? title : 'image'} />}
      <RecipeModal
        title={title}
        ingredients={ingredients}
        instructions={instructions}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default RecipeCard;
