import React from "react"  
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"  
import ProjectsComponent from "../components/projects"

import "../assets/css/main.css"

const IndexPage = () => (  
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiProject {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <ProjectsComponent projects={data.allStrapiProject.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage  
