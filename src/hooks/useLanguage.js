import { useState, useEffect } from 'react'
import fetch from 'cross-fetch'
import { config } from 'platformsh-config'

const DEFAULT_LANGUAGE = { label: 'Nederlands (nl)', value: 'nl', default: true }

export default (code = 'nl') => {
  const [language, setLanguage] = useState(code);
  const [languages, setLanguages] = useState([{ label: 'Nederlands (nl)', value: 'nl', default: true }]);

  const toggleLanguage = (code) => {
    typeof window !== undefined && window.localStorage.setItem('language', code);
    setLanguage(code);
  };

  // const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  // get languages from API
  useEffect(() => {
    const localLanguage = typeof window !== undefined && window.localStorage.getItem('language')
    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      toggleLanguage('nl')

      console.log('useEffect useLanguage', code, config)

      let backend_route = ''
      // if (config.isValidPlatform()) {
      //   require('dotenv').config({
      //     path: `.env.${process.env.NODE_ENV}`,
      //   })
      //   backend_route = `http://${config.credentials('strapi')['host']}`
      // } else {
      //   require('dotenv').config()
      //   backend_route = process.env.API_URL
      // }

      async function fetchLanguages() {
        const allLanguages = await fetch(`${backend_route}/i18n/locales`).then(res => res.json()) || []
        setLanguages(allLanguages.map(lang => ({ label: lang.name, value: lang.code, default: lang.isDefault })))
      }
      fetchLanguages()
    }
  }, []);

  return [language, toggleLanguage, languages];
};
