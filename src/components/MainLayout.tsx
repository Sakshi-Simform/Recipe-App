import React from 'react';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
  showSearch?: boolean;
  onSearch?: (term: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showSearch = false,
  onSearch = () => {},
}) => {
  return (
    <>
      <Header showSearch={showSearch} onSearch={onSearch} />
      <main>{children}</main>
    </>
  );
};