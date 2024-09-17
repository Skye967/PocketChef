"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface SelectProps {
  onSelect: (option: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  defaultValue: string;
  label: string;
}

const SelectDropdown: React.FC<SelectProps> = (SelectProps) => {
  // const [selectedOption, setSelectedOption] = useState<string>(SelectProps.defaultValue);
  // console.log(selectedOption)

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id="demo-simple-select-label">{SelectProps.label}</InputLabel>
      <Select
        defaultValue={SelectProps.defaultValue}
        style={{ backgroundColor: "white" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={e => SelectProps.onSelect(e.target.value)}
      >
        {SelectProps.options.map((category, key) => (
          <MenuItem key={key} value={category.value}>{category.label}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};

export default SelectDropdown;
