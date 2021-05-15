import React, { createContext } from 'react';
import useLanguage from 'hooks/useLanguage';

export const LanguageContext = createContext('nl');

export default ({ children }) => {
  const [language, toggleLanguage, languages] = useLanguage('nl');

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        languages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
