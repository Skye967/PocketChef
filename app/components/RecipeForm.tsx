'use client';

import React, { useState, FormEvent } from 'react';
import { mealCategories, dietCategories } from '../util/constants';

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
    <div className='mx-auto mt-8 max-w-md rounded bg-white p-4 shadow-md'>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor='ingredients'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Enter Food Ingredients:
        </label>
        <input
          type='text'
          id='ingredients'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='w-full rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring'
          placeholder='e.g., chicken, rice, carrots'
          required
        />

        <div className='m-5 border'></div>

        <label
          htmlFor='mealCategory'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Select a Meal Category(Optional):
        </label>
        <select
          id='mealCategory'
          name='mealCategory'
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        >
          <option value=''>Choose a category</option>
          {mealCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className='m-5 border'></div>

        <label
          htmlFor='mealCategory'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          How many recipes:
        </label>
        <select
          id='numberOfRecipes'
          name='numberOfRecipes'
          value={numberOfRecipes}
          required
          onChange={(e) => setNumberOfRecipes(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>

        <div className='m-5 border'></div>

        <label
          htmlFor='dietType'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Select a Diet(Optional):
        </label>
        <select
          id='DietType'
          name='DietType'
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        >
          <option value=''>Choose a category</option>
          {dietCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className='m-5 border'></div>

        <button
          type='submit'
          className='mt-4 rounded bg-blue-500 px-4 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
