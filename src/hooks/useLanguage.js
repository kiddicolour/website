import { useState, useEffect } from 'react';

export default () => {
  const [language, setLanguage] = useState('nl');

  const toggleLanguage = (code) => {
    window.localStorage.setItem('language', code);
    setLanguage(code);
  };

  // const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  // useEffect(() => {
  //   const localLanguage = window.localStorage.getItem('language');
  //   if (localLanguage) {
  //     window.localStorage.setItem('language', localLanguage);
  //     setLanguage(localLanguage);
  //   } else if (prefersDarkMode) {
  //     setLanguage('dark');
  //   } else {
  //     setLanguage('light');
  //   }
  // }, [prefersDarkMode]);

  return [language, toggleLanguage];
};
