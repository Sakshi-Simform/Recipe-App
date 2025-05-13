import React from 'react';
import { SearchBar } from './SearchBar';

interface HeaderProp{
  onSearch: (searchTerm: string) => void;
}

export const Header: React.FC<HeaderProp> = ({ onSearch }) => {
  return (
    <header>
      <div className='left-logo'>
        <img
          src='/icon/logo1.png'
          className='Cookbook-logo'
          alt='logo'
        />
        <h1 id='app-name'>CookBook</h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};