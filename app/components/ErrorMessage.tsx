'use client'

import React from "react";

type ErrorMessageProps = {
  message: string;
  details?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, details }) => {
  return (
    <div className="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
      <strong className="font-bold text-center">{message}</strong>
      {details && <p className="mt-2 text-sm">{details}</p>}
    </div>
  );
};

export default ErrorMessage;
