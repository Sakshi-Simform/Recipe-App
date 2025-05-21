import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import styles from '../styles/App.module.css'

interface HeaderProp {
  onSearch: (searchTerm: string) => void;
  showSearch: boolean; 
}

export const Header: React.FC<HeaderProp> = ({ onSearch, showSearch = false }) => {
  const location = useLocation();

  return (
    <header>
      {/* display the logo */}
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

      {/* Show SearchBar only on homepage */}
      {location.pathname === "/" && showSearch && <SearchBar onSearch={onSearch} />}
    </header>
  );
};