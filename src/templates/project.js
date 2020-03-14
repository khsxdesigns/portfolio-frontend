import React from "react"  
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"  
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`  
  query projectQuery($id: Int!) {
    strapiProject(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Project = ({ data }) => {  
  const project = data.strapiProject
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={project.image.publicURL}
          data-srcset={project.image.publicURL}
          data-uk-img
        >
          <h1>{project.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={project.content} />
            <p>
              <Moment format="MMM Do YYYY">{project.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project  