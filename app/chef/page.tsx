'use client';

import './form.css'
import React, { useEffect, useState } from 'react';
import { RecipeList } from '../components/RecipeList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import RecipeForm from '../components/RecipeForm';
import { Recipe } from '../util/constants';
import { RecipeListConstructor } from '../util/chatGPTParser';


const Home: React.FC = () => {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const HandleSubmit = (
    ingredientList: String,
    mealType: string,
    numberOfRecipes: string,
    dietType: string
  ) => {
    try {
      setRecipeList(null);
      setError(null);
      setIsLoading(true);
      RecipeListConstructor(
        ingredientList,
        mealType,
        numberOfRecipes,
        dietType
      ).then((data: Recipe[] | null) => {
        setRecipeList(data)
        setIsLoading(false)
      })

    } catch (error) {
      console.error('Something went wrong!', error);
      setIsLoading(false)
      setError('Something went wrong, please try again!');
      return
    }
  };

  return (
    <main className='chef bg'>
      <RecipeForm onSubmit={HandleSubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <RecipeList recipes={recipeList} />
      )}
    </main >
  );
}

export default Home