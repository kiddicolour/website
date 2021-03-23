import React from "react"
import PropTypes from "prop-types"
import {
  Layout as ThemeLayout,
  Header,
  Logo,
  NavMenu,
  MobileNav,
  MenuToggle,
  ColorToggle,
  ContentWrapper,
  SideNav,
  Main,
  Footer,
  FooterWidgets
} from "gatsby-theme-elements"

import LogoSVG from "./Logo"

import Nav from "./nav"
import Seo from "./seo"

import Theme from "../gatsby-theme-elements/theme.js"

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Seo />
      <Header style={{backgroundColor: Theme.colors.secondary}}>
        <Logo/>
        <NavMenu>
          <Nav />
        </NavMenu>
        <MobileNav/>
        <MenuToggle/>
      </Header>
      <ContentWrapper>
        <SideNav/>
        <Main>
          {children}
        </Main>    
      </ContentWrapper>
      <Footer>
        <FooterWidgets/>
      </Footer>
    </ThemeLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout  
