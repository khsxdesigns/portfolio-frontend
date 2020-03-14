import React from "react"  
import { graphql } from "gatsby"

import ProjectsComponent from "../components/projects"  
import Layout from "../components/layout"

export const query = graphql`  
  query Category($id: Int!) {
    projects: allStrapiProject(filter: { category: { id: { eq: $id } } }) {
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
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {  
  const projects = data.projects.edges
  const category = data.category.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <ProjectsComponent projects={projects} />
        </div>
      </div>
    </Layout>
  )
}

export default Category  