import React, { useContext } from 'react';
import { useStaticQuery } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { composeSEO, querySEO } from 'components/common/SEO'

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  const { strapiGlobal } = useStaticQuery(querySEO);
  const { defaultSeo, siteName, introduction } = strapiGlobal;
  const seo = composeSEO(defaultSeo, siteName)

  return (
    <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{seo.title}</h1>
          <h4>{introduction}</h4>
        </Details>
      </IntroWrapper>
  );
};
