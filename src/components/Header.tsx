import React from 'react';
import { SearchBar } from './SearchBar';
import styles from '../styles/App.module.css'

interface HeaderProp {
  onSearch: (searchTerm: string) => void;
  showSearch: boolean; 
}

export const Header: React.FC<HeaderProp> = ({ onSearch, showSearch }) => {
  return (
    <header>
      <div className={styles.leftlogo}>
        <img
          src='/icon/logo1.png'
          className={styles.Cookbooklogo}
          alt='logo'
        />
        <h1 className={styles.appname}>CookBook</h1>
      </div>
      {showSearch && <SearchBar onSearch={onSearch} />} 
    </header>
  );
};