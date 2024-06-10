import React from 'react';

function Loading() {
  return (
    <div className='mt-8 flex flex-col items-center justify-center'>
      <div className='h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500'></div>
      <span className='mt-4 text-lg text-white'>
        Please wait...
      </span>
    </div>
  );
}

export default Loading;
