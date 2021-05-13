import React from 'react'
import { graphql } from 'gatsby'

import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import { Layout, SEO } from 'components/common'
import { Header } from 'components/common'

export const query = graphql`
  query DrawingQuery($id: Int!) {
    strapiDrawing(strapiId: { eq: $id }) {
      strapiId
      title
      description
      image {
        url
      }
    }
  }
`

const Drawing = ({ data }) => {
  const drawing = data.strapiDrawing
  return (
    <Layout>
      <SEO />
      <Header />
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={drawing.image.url}
          data-srcset={drawing.image.url}
          data-uk-img
        >
          <h1>{drawing.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={drawing.description} />
            <p>
              <Moment format="MMM Do YYYY">{drawing.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Drawing
