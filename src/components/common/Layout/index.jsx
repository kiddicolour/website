import React, { useContext } from 'react';
import { LanguageContext } from 'providers/LanguageProvider';
import { Footer } from 'components/common';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Global language={language} />
      {children}
      <Footer />
    </>
  );
};
