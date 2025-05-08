import React from 'react';
import SearchBar from './searchBar';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header>
      <div className='left-logo'>
        <img
          src='/icon/logo1.png'
          className='logo-image'
          alt='logo'
        />
        <h1 id='app-name'>CookBook</h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;

