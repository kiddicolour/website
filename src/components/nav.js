import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Dropdown from './navigation/dropdown'
import homeIcon from "../images/icons-temp/A_home.png"
import downloadIcon from "../images/icons-temp/E_download.png"
import emmaEnLowieIcon from "../images/icons-temp/F_Emma_en_Lowie.png"
import Theme from "../gatsby-theme-elements/theme.js"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar data-uk-navbar" style={{backgroundColor: Theme.colors.secondary}}>
        {/* <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Kiddicolor</Link>
            </li>
          </ul>
        </div> */}

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <StaticQuery
              query={graphql`
                query {
                  allStrapiAge {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                  allStrapiTheme {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                  allStrapiType {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                  allStrapiDownload {
                    edges {
                      node {
                        strapiId
                        title
                      }
                    }
                  }
                }
              `}
              render={data => (
                <>
                  <li key="nav_home">
                    <Link to="/">
                      <img src={homeIcon} alt="home" />
                      <p>home</p>
                    </Link>
                  </li>
                  <li key="nav_ages">
                    <Dropdown items={data.allStrapiAge.edges} label="age" type="age" />
                  </li>
                  <li key="nav_types">
                    <Dropdown items={data.allStrapiType.edges} label="type" type="type"/>
                  </li>
                  <li key="nav_themes">
                    <Dropdown items={data.allStrapiTheme.edges} label="theme" type="theme"/>
                  </li>
                  <li key="nav_downloads">
                    <Link to="/downloads">
                      <img src={downloadIcon} alt="downloads" />
                      <p>downloads</p>
                    </Link>
                  </li>
                  <li key="nav_emmaenlowie">
                    <Link to="/type/6">
                      <img src={emmaEnLowieIcon} alt="Emma and Thomas" />
                      <p>Emma and Thomas</p>
                    </Link>
                  </li>
                </>
              )}
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav  
