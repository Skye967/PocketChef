'use client';

import React, { useEffect, useState } from 'react';
import { Recipe } from '../util/constants';
import Image from 'next/image'
import PlaceHolder from '@/public/Image-Placeholder-Dark.png'
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'

const RecipeModal: React.FC<Recipe> = ({
  title,
  ingredients,
  instructions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('')
  const [loadingImage, setLoadingImage] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const imageGenerator = async () => {
    setLoadingImage(true)
    if (!url) {
      const response = await fetch(`/api/generate-image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: `A photgraph of a ${title} dish.` })
      })
      const image = await response.json()
      setUrl(image.data[0].url)
      return image
    }
  }

  useEffect(() => {
    setLoadingImage(false)
  },[url])

  return (
    <div>
      <button
        className='rounded bg-blue-500 px-4 py-2 m-5 text-white focus:border-blue-300 focus:outline-none focus:ring'
        onClick={toggleModal}
      >
        View Recipe
      </button>

      {isOpen && (
        <div className="fixed inset-2 z-50  flex align-middle items-center justify-center m-[10%]">
          <div className="bg-white p-8 rounded-md z-10 max-h-screen max-w-screen overflow-auto border drop-shadow-[0_5.2px_5.2px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className='flex justify-center items-center'>
              {!url
                ? 
                  ( !loadingImage ? 
                    <div className='relative flex justify-center items-center flex-col'>
                      <Image
                      onClick={imageGenerator}
                      style={{ width: 300, height: 300 }}
                      className='w-1/4 cursor-pointer rounded'
                      src={PlaceHolder}
                      alt="Placeholder"
                    /> 
                    <span className='absolute top-1/4 text-white font-bold text-xl'>Click to Generate Image!</span>
                    </div>
                  : <div className="animate-pulse rounded min-h-[300px] min-w-[300px] bg-gray-500">
                      <img className="animate-pulse m-5 rounded min-h-[200px] min-w-[200px] bg-white" src={''} alt={''} />
                      <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
                      <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
                      <div className="animate-pulse m-5 rounded min-h-[10px] min-w-[10px] bg-white"></div>
                    </div>)
                :
                <div className='rounded bg-cover bg-center'>
                  <AsyncImage
                    className='block rounded object-center object-cover shadow-black shadow-lg'
                    src={url}
                    style={{ width: 300, height: 300 }}
                    loader={<div style={{ background: '#888' }} />}
                    Transition={Blur}
                  />
                </div>
              }
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-bold'>Ingredients:</h3>
              <ul className='list-disc pl-6'>
                {ingredients!.map((ingredient, index) => (
                  <li key={index} className='text-gray-700'>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='mb-2 text-xl font-bold'>Instructions:</h3>
              <ol className='list-disc pl-6'>
                {instructions!.map((instruction, index) => (
                  <li key={index} className='text-gray-700'>
                    {index + 1}. {instruction}
                  </li>
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
