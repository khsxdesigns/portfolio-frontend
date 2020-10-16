import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../layouts/primary"
import Hero from "../pages/screens/home/hero"
import WhoWeAre from "../pages/screens/home/what-i-do"
import Services from "../pages/screens/home/services"
import Help from "../components/help"
import Projects from "./screens/home/case-studies"
import Processes from "./screens/home/process"

const IndexPage = () => (
  <Layout>
    <Hero />
    {/* <Services /> */}
    <Processes />
    <Projects />
  </Layout>
)

export default IndexPage
