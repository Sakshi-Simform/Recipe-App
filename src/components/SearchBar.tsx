import  {useState,  ChangeEvent, FC } from 'react';
import dinnerLogo from '/assets/dinner.svg';
import styles from '../styles/SearchBar.module.css'

interface SearchBarProp {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: FC<SearchBarProp> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.searchbar}>
      <img 
      className={styles.dinnerlogo}
      src={dinnerLogo}
      alt='dinner logo'
      />
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};