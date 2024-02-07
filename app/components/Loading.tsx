import React from 'react'


function Loading() {

  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <div className="border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 text-lg">Please wait a moment while we generate some recipes</p>
    </div>
  );
}

export default Loading