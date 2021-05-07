import React from "react"
import { graphql } from "gatsby"

import DrawingsComponent from "../components/drawings"
import { Layout, SEO } from 'components/common';
import { Intro, Featured } from 'components/landing';
import { Header } from 'components/theme';

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
            publicURL
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
      <SEO />
      <Intro />
      <Header />
      <Featured />
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
