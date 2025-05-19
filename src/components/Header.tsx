import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import styles from '../styles/App.module.css'

interface HeaderProp {
  onSearch: (searchTerm: string) => void;
  showSearch: boolean; 
}

export const Header: React.FC<HeaderProp> = ({ onSearch, showSearch=false }) => {
  return (
    <header>
      <div className={styles.leftlogo}>
        <Link to="/" className={styles.logoLink}>
        <img
          src='/icon/logo1.png'
          className={styles.Cookbooklogo}
          alt='logo'
        />
        <h1 className={styles.appname}>CookBook</h1>
        </Link>
      </div>
      {showSearch && <SearchBar onSearch={onSearch} />} 
    </header>
  );
};