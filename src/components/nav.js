import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Dropdown from './navigation/dropdown'

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Kiddicolor</Link>
            </li>
          </ul>
        </div>

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
                }
              `}
              render={data => (
                <>
                  <li key="nav_ages">
                    <Dropdown items={data.allStrapiAge.edges} label="Ages" type="age" />
                  </li>
                  <li key="nav_themes">
                    <Dropdown items={data.allStrapiTheme.edges} label="Theme" type="theme"/>
                  </li>
                  <li key="nav_types">
                    <Dropdown items={data.allStrapiType.edges} label="Types" type="type"/>
                  </li>
                </>
              )
                // data.allStrapiAge.edges.map((age, i) => {
                //   return (
                //     <li key={age.node.strapiId}>
                //       <Link to={`/age/${age.node.strapiId}`}>
                //         {age.node.name}
                //       </Link>
                //     </li>
                //   )
                // }) + data.allStrapiTheme.edges.map((theme, i) => {
                //   return (
                //     <li key={theme.node.strapiId}>
                //       <Link to={`/theme/${theme.node.strapiId}`}>
                //         {theme.node.name}
                //       </Link>
                //     </li>
                //   )
                // }) + data.allStrapiType.edges.map((type, i) => {
                //   return (
                //     <li key={type.node.strapiId}>
                //       <Link to={`/type/${type.node.strapiId}`}>
                //         {type.node.name}
                //       </Link>
                //     </li>
                //   )
                // }) 
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav  
