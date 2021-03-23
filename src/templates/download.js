import React from "react"
import { graphql } from "gatsby"

import DrawingsComponent from "../components/drawings"
import Layout from "../components/layout"

export const query = graphql`
  query Download($id: Int!) {
    downloads: allStrapiDownload {
      edges {
        node {
          id
          title
        }
      }
    }
    download: strapiDownload(strapiId: { eq: $id } ) {
      title
    }
  }
`

const Download = ({ data }) => {
  const downloads = data.downloads.edges
  const download = data.download.title

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{download}</h1>
          <DrawingsComponent drawings={downloads} />
        </div>
      </div>
    </Layout>
  )
}

export default Download
