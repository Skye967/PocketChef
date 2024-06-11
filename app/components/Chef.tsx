'use client';

import '../chef/form.css'
import React, { useState } from 'react';
import { RecipeList } from './RecipeList';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import RecipeForm from './RecipeForm';
import { Recipe } from '../util/constants';
import { RecipeListConstructor } from '../util/chatGPTParser';

type ChefProps = {
    flip: () => void;
}

const Chef: React.FC<ChefProps> = ({ flip }) => {
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
        <div className='chef'>
            <button className='back-89' onClick={flip}>
                Go Back
            </button>
            <RecipeForm onSubmit={HandleSubmit} />
            {!isLoading && error && <ErrorMessage message={error} />}
            {isLoading ? (
                <Loading />
            ) : (
                <RecipeList recipes={recipeList} />
            )}


            <div className="bg">


            </div>
        </div >
    );
}

export default Chef