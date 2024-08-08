"use client";
import { Minus, Plus } from '@/public/icon';
import React, { useState } from 'react';
type props={
  numberArticle:number;
  setNumberArticle: React.Dispatch<React.SetStateAction<number>>;
}
const Counter=  ({setNumberArticle,numberArticle}:props) => {

  const handleAdd = () => {
    setNumberArticle(prevValue => prevValue + 1);
  };

  const handleMinus = () => {
    setNumberArticle(prevValue => Math.max(1, prevValue - 1));
  };

  return (
    <div className='flex justify-between w-36 bg-[#F5F5F5] items-center rounded-lg my-4'>
          <button
                className='h-14 w-14 flex items-center justify-center'
                onClick={() => {handleMinus()
                }}
              >
<Minus/>
              </button>
              <p className='font-bold mx-2'>{numberArticle}</p>
              <button
                className='h-14 w-14 flex items-center justify-center'
                onClick={() => {handleAdd()
                }}
              >
<Plus/>
              </button>
    </div>
  );
};

export default Counter;