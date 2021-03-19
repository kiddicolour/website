import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import DrawingComponent from "../components/drawings"

import "../assets/css/main.css"

const IndexPage = ({data, location}) => {
  
  const siteTitle = data?.site.siteMetadata?.title || `Title`

  return (
  <Layout location={location} title={siteTitle}>
    <StaticQuery
      query={graphql`
        query {
          allStrapiDrawing {
            edges {
              node {
                strapiId
                title
                ages {
                  name
                }
                image {
                  url
                }
                themes {
                  name
                }
                types {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <DrawingComponent drawings={data.allStrapiDrawing.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)}

export default IndexPage
