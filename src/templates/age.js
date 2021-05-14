import React from 'react'
import { graphql } from 'gatsby'

import DrawingsComponent from '../components/drawings'
import { Layout, SEO } from 'components/common'
import { Featured } from 'components/landing'
import { Header } from 'components/common'

// (filter: { ages: { id: { eq: $id } } })

export const query = graphql`
  query Age($id: Int!) {
    drawings: allStrapiDrawing(
      filter: { ages: { elemMatch: { id: { eq: $id } } } }
    ) {
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
    age: strapiAge(strapiId: { eq: $id }) {
      name
    }
  }
`

const Age = ({ data }) => {
  const drawings = data.drawings.edges
  const age = data.age.name

  return (
    <Layout>
      <SEO />
      <Header />
      <Featured />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{age}</h1>
          <DrawingsComponent drawings={drawings} />
        </div>
      </div>
    </Layout>
  )
}

export default Age
