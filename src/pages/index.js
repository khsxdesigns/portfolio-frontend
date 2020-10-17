import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../layouts/primary"
import Hero from "../pages/screens/home/hero"
import Projects from "./screens/home/case-studies"
import Processes from "./screens/home/process"

const IndexPage = ({ data: { strapiHome } }) => {
  const { content, section } = strapiHome

  const heroProps = {
    content: content,
    section: section,
  }

  return (
    <Layout>
      <Hero {...heroProps} />
      {/* <Services /> */}
      <Processes />
      <Projects />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    strapiHome {
      content
      section
      id
    }
  }
`
