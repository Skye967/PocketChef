import React from 'react';

function Loading() {
  return (
    <div className='mt-8 flex flex-col items-center justify-center'>
      <div className='h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500'></div>
      <p className='mt-4 text-lg text-gray-600'>
        Please wait a moment while we generate some recipes
      </p>
    </div>
  );
}

export default Loading;
