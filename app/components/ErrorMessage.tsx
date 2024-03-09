'use client';

import React from 'react';

type ErrorMessageProps = {
  message: string;
  details?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, details }) => {
  return (
    <div className='mb-4 rounded-md border border-red-400 bg-red-100 px-4 py-2 text-center text-red-700'>
      <strong className='text-center font-bold'>{message}</strong>
      {details && <p className='mt-2 text-sm'>{details}</p>}
    </div>
  );
};

export default ErrorMessage;
