import React from "react"
import PropTypes from "prop-types"

// import { Link } from "gatsby"
import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

// import {
//   Layout as ThemeLayout,
//   Header,
//   Logo,
//   NavMenu,
//   MobileNav,
//   MenuToggle,
//   ColorToggle,
//   ContentWrapper,
//   SideNav,
//   Main,
//   Footer,
//   FooterWidgets
// } from "gatsby-theme-elements"

import LogoSVG from "./Logo"

import Nav from "./nav"
import Seo from "./seo"
import Paperbase from "./material-ui/Paperbase"

const Layout = ({location, title, children}) => {

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <Paperbase>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>

    </Paperbase>
  )

  return (
    <ThemeLayout>
      <Seo />
      <Header>
        <Logo/>
        <NavMenu>
          <Nav />
        </NavMenu>
        <MobileNav/>
        <MenuToggle/>
        <ColorToggle/>
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
