import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query DrawingQuery($id: Int!) {
    strapiDrawing(strapiId: { eq: $id } ) {
      strapiId
      title
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
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={drawing.image.publicURL}
          data-srcset={drawing.image.publicURL}
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
