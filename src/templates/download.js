import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import { Layout, SEO } from 'components/common';
import { Intro } from 'components/landing';
import { Header } from 'components/theme';

export const query = graphql`
  query DownloadQuery($id: Int!) {
    strapiDownload(strapiId: { eq: $id } ) {
      strapiId
      title
      preview {
        url
      }
      file {
        url
      }
    }
  }
`

const Download = ({ data }) => {
  const download = data.strapiDownload
  return (
    <Layout>
      <SEO />
      <Intro />
      <Header />
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={download.image.publicURL}
          data-srcset={download.image.publicURL}
          data-uk-img
        >
          <h1>{download.title}</h1>
          {download.file.url}
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={download.description} />
            <p>
              <Moment format="MMM Do YYYY">{download.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Download
