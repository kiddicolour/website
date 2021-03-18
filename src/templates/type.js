import React from "react"
import { graphql } from "gatsby"

import DrawingsComponent from "../components/drawings"
import Layout from "../components/layout"

export const query = graphql`
  query Type($id: Int!) {
    drawings: allStrapiDrawing(filter: { types: { elemMatch: { id: { eq: $id } } } }) {
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
    type: strapiType(strapiId: { eq: $id } ) {
      name
    }
  }
`

const Type = ({ data }) => {
  const drawings = data.drawings.edges
  const type = data.type.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{type}</h1>
          <DrawingsComponent drawings={drawings} />
        </div>
      </div>
    </Layout>
  )
}

export default Type
