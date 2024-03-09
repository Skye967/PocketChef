'use client';

import React, { useState } from 'react';
import RecipeModal from './RecipeModal';
import { Recipe } from '../util/constants';
import { Blur } from 'transitions-kit'
import { AsyncImage } from 'loadable-image'

const RecipeCard: React.FC<Recipe> = ({
  title,
  ingredients,
  instructions,
  imageUrl,
}) => {

  return (
    <div className='flex flex-col justify-center items-center relative mx-auto mt-8 max-w-md rounded bg-white p-4 shadow-md'>
      <h2 className='mb-2 text-2xl font-bold'>{title}</h2>

      {!imageUrl
        ?
        <div className="animate-pulse rounded min-h-[300px] min-w-[300px] bg-gray-500">
          <img className="animate-pulse m-5 rounded min-h-[200px] min-w-[200px] bg-white" src={''} alt={''} />
          <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
          <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
          <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
        </div>
        :
        <div className='rounded bg-cover bg-center'>
          <AsyncImage
            className='block rounded object-center object-cover shadow-black shadow-lg'
            src={imageUrl}
            style={{ width: 300, height: 300 }}
            loader={<div style={{ background: '#888' }} />}
            Transition={Blur}
          />
        </div>
      }


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
