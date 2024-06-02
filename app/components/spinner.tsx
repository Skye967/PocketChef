'use client'
import './css/spinner.css'
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
