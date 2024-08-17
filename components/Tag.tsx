import React, { useState } from 'react';

interface TagProps {
  label: string;
  isSelected: boolean;
  handlePress?: ()=> void;
}

const Tag: React.FC<TagProps> = ({ label,  handlePress ,isSelected}) => {

  return (
    <button
      onClick={handlePress}
      className={`m-1 w-16 rounded border border-gray-300 p-2 ${
        isSelected ? 'bg-secondary text-white' : 'bg-white text-gray'
      }`}
    >
      {label}
    </button>
  );
};

export default Tag;
