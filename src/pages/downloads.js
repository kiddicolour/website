import React from 'react'
import { graphql } from 'gatsby'

import DrawingsComponent from '../components/drawings'
import { Layout, SEO } from 'components/common'
import { Featured } from 'components/landing'
import { Header } from 'components/common'

const Downloads = ({ data }) => {
  const downloads = data.downloads.edges

  return (
    <Layout>
      <SEO />
      <Header />
      <Featured />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Downloads</h1>
          {/* <DrawingsComponent drawings={downloads} /> */}
          {downloads.map((download, index) => {
            return (
              <ul>
                <li>{download.node.title}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Downloads {
    downloads: allStrapiDownload {
      edges {
        node {
          id
          title
          file {
            url
          }
          preview {
            url
          }
        }
      }
    }
  }
`

export default Downloads
