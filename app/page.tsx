'use client';

import React, { useEffect, useState } from 'react';
import { RecipeList } from './components/RecipeList';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import RecipeForm from './components/RecipeForm';
import Image from 'next/image';
import logo from '../public/littleChefLogo.png';
import { Recipe } from './util/constants';
import { RecipeListConstructor } from './util/chatGPTParser';


export default function Home() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const imageGenerator = async (prompt: string) => {
    const response = await fetch(`/api/generate-image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const image = response.json()
    return image
  }

  const HandleSubmit = async (
    ingredientList: String,
    mealType: string,
    numberOfRecipes: string,
    dietType: string
  ) => {
    setError(null);
    setIsLoading(true);
    try {
      const list: Promise<Recipe[] | null> = RecipeListConstructor(
        ingredientList,
        mealType,
        numberOfRecipes,
        dietType
      );
      setRecipeList(await list as Recipe[]);
    } catch (error) {
      console.log('Something went wrong!', error);
      setError('Something went wrong, please try again!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    
    const image = async () => {
      if (recipeList !== null) {
        for (let i = 0; i < recipeList.length; i++) {
          setTimeout(async () => {
            if (!recipeList[i].imageUrl) {
              const imageUrl: string = await imageGenerator(recipeList[i].title!)
              if (typeof (imageUrl) === 'string') {
                const nextRecipeList = recipeList
                nextRecipeList[i].imageUrl = imageUrl
                setRecipeList([...nextRecipeList])
              }
            }
          }, 20000 * (i + 1));
        }
      }
    }
    if (recipeList) {
      image()
    }
  })

  return (
    <main>
      <div className='flex justify-between bg-gradient-to-r from-emerald-300 via-emerald-800 to-emerald-300 p-6 text-white shadow-sm shadow-black'>
        <div className='w-1/3'>
          <Image
            src={logo}
            alt='PocketChef Logo'
            className='h-20 w-20 rounded-full bg-white p-1'
          />
        </div>
        <div className='flex w-1/3 place-items-center justify-center'>
          <h1 className='text-center text-3xl font-bold '>PocketChef</h1>
        </div>
        <div className='w-1/3'></div>
      </div>
      <RecipeForm onSubmit={HandleSubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <RecipeList recipes={recipeList} />
      )}
    </main>
  );
}
