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
  const [getImages, setGetImages] = useState(false)

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


  const image = async () => {
    setError('')
    if (recipeList !== null) {
      for (let i = 0; i < recipeList.length; i++) {
        setTimeout(async () => {
          if (!recipeList[i].imageUrl) {
            try {
              const imageUrl = await imageGenerator(recipeList[i].title!)
              if (imageUrl.data[0].url) {
                const nextRecipeList = recipeList
                nextRecipeList[i].imageUrl = imageUrl.data[0].url
                setRecipeList([...nextRecipeList])
              }
            } catch (error) {
              setGetImages(false)
              setError('Something went wrong, please try again!');
              console.error('Something went wrong!', error);
              throw error
            }
          }
        }, 12000 * (i + 1));
      }
    }
    setGetImages(false)
    setError('')
  }

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
        setGetImages(true)
      })

    } catch (error) {
      console.error('Something went wrong!', error);
      setGetImages(false)
      setIsLoading(false)
      setError('Something went wrong, please try again!');
      return
    }
  };

  useEffect(() => {
    if (getImages && recipeList) {
      image()
    }
  }, [getImages])

  return (
    <main className='chef'>
      {/* <button className='button-89' onClick={flip}>
        Go Back
      </button> */}
      <RecipeForm onSubmit={HandleSubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <RecipeList recipes={recipeList} />
      )}


      <div className="bg">


      </div>
    </main >
  );
}

export default Home