import React, { useContext } from 'react';
import LanguageContext from 'providers/LanguageProvider';
import { Footer } from 'components/common';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  const language = useContext(LanguageContext);
  console.log('Layout language context', language)

  return (
    <LanguageContext>
      <Global language={language} />
      {children}
      <Footer />
    </LanguageContext>
  );
};
