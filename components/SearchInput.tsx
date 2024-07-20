import { Search } from '@/public/icon';
import React, { useState } from 'react';
interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <view className='flex outline-none rounded-xl bg-white max-w-[500px]'>
        <input
          className={`w-full placeholder:text-sm p-4  outline-none rounded-xl`}
          name="searchTerm"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Qu'est-ce que tu cherches?"
          />
      <button type="submit" className='bg-primary m-2 rounded-xl p-3' onClick={()=>handleSubmit}><Search/></button>
    </view>
  );
};

export default SearchInput;