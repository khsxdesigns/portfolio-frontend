import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../layouts/primary"
import Hero from "../pages/screens/home/hero"
import Projects from "./screens/home/case-studies"
import Processes from "./screens/home/process"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Processes />
      <Projects />
    </Layout>
  )
}

export default IndexPage
