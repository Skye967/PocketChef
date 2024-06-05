"use client"
import React, { useState } from 'react';
import styles from './css/select.module.css';

interface SelectProps {
    onSelect: (option: string) => void;
    options: string [];
    defaultValue: string;
    label: string;
}

const SelectDropdown: React.FC<SelectProps> = (SelectProps) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChange = (option: string) => {
        setSelectedOption(option);
        SelectProps.onSelect(option)
        setIsOpen(false); 
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block w-64">
            
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="mt-2 w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {selectedOption || <p className="cursor-pointer hover:bg-blue-100" onClick={() => handleChange(SelectProps.defaultValue)}>{SelectProps.label}</p>}
                </button>
                {isOpen && (
                    <ul
                        className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${styles.dropdown}`}
                    >
                        {SelectProps.options.map((category) => (
                            <li key={category} className="cursor-pointer px-4 py-2 hover:bg-blue-100" onClick={() => handleChange(category)}>{category}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SelectDropdown;
