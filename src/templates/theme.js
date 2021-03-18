import React from "react"
import { graphql } from "gatsby"

import DrawingsComponent from "../components/drawings"
import Layout from "../components/layout"

export const query = graphql`
  query Theme($id: Int!) {
    drawings: allStrapiDrawing(filter: { themes: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          id
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
    theme: strapiTheme(strapiId: { eq: $id } ) {
      name
    }
  }
`

const Theme = ({ data }) => {
  const drawings = data.drawings.edges
  const theme = data.theme.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{theme}</h1>
          <DrawingsComponent drawings={drawings} />
        </div>
      </div>
    </Layout>
  )
}

export default Theme
