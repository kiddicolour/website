import React from "react"
import { graphql } from "gatsby"

import DrawingsComponent from "../components/drawings"
import Layout from "../components/layout"

export const query = graphql`
  query Downloads {
    downloads: allStrapiDownload {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

const Downloads = ({ data }) => {
  const downloads = data.downloads.edges

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Downloads</h1>
          {/* <DrawingsComponent drawings={downloads} /> */}
          {downloads.map((download, index) => {
              return (
                <ul>
                    <li>
                    {download.node.title}
                    </li>
                </ul>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Downloads
