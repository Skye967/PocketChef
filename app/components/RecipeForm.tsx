'use client';

import '../landing/form.css'
import React, { useState, FormEvent } from 'react';
import { mealCategories, dietCategories, amountOfRecipes } from '../util/constants';
import Select from './Select';

type FoodInputComponentProps = {
  onSubmit: (
    ingredients: string,
    mealType: string,
    numberOfRecipes: string,
    dietType: string
  ) => void;
};

const RecipeForm: React.FC<FoodInputComponentProps> = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('');
  const [numberOfRecipes, setNumberOfRecipes] = useState('5');
  const [dietType, setDietType] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ingredients) {
      onSubmit(ingredients, mealType, numberOfRecipes, dietType);
    }
    setMealType('');
    setDietType('');
  };

  return (
    <div className='form-signin mx-auto mt-8 max-w-md rounded p-4 shadow-md'>
      <h1 className="h1 text-5xl font-bold p-4 flex text-white justify-center items-center">PocketChef</h1>
      <form className='form' onSubmit={handleSubmit}>

        <div className='form-floating'>
          <label
            htmlFor='ingredients'
            className='mb-2 text-white block text-sm font-bold'
          >
            Enter Food Ingredients:
          </label>
          <input
            type='text'
            id='ingredients'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className='form-control w-full rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring'
            placeholder='e.g., chicken, rice, carrots'
            required
          />
        </div>

        <div className='m-5 border'></div>

        <label
          htmlFor='mealCategory'
          className='mb-2 text-white block text-sm font-bold'
        >
          Select a Meal Category(Optional):
        </label>

        <Select onSelect={setMealType} options={mealCategories} defaultValue={''} label={'Choose a Category'}/>

        <div className='m-5 border'></div>

        <label
          htmlFor='numberOfRecipes'
          className='mb-2 text-white block text-sm font-bold'
        >
          How many recipes:
        </label>

        <Select onSelect={setNumberOfRecipes} options={amountOfRecipes} defaultValue={'5'} label={'5'}/>

        <div className='m-5 border'></div>

        <label htmlFor="options" className="block text-sm font-bold text-white">
          Select a Diet(Optional):
        </label>

        <Select onSelect={setDietType} options={dietCategories} label={'Choose a Diet'} defaultValue={''} />

        <div className='m-5 border'></div>

        <button
          type='submit'
          className='btn w-2/3 mt-4 bg-blue-50 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 backdrop-blur-md text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
