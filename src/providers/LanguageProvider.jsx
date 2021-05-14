import React, { createContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';
import useLanguage from 'hooks/useLanguage';

export const LanguageContext = createContext('light');

export default ({ children }) => {
  const [language, toggleLanguage] = useDarkMode();

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
