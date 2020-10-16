import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Hero = () => {
  return (
    <Section>
      <Container>
        <Name>Hi, I'm Kerrie. I'm a UX/Product Designer</Name>
        <Description>
          I'm a collaborator who helps define, design, and launch user-centric
          digital products and <Highlighted>human</Highlighted> experiences.
        </Description>
      </Container>
      {/* <ProjectsComponent projects={data.allStrapiProject.edges} /> */}
    </Section>
  )
}

export default Hero

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgb(48, 152, 243);
  color: rgb(255, 255, 255);
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 0px 24px;
  margin: 0px auto;
  @media screen and (min-width: 768px) {
    padding: 0 48px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`

const Name = styled.h1`
  font-size: 42px;
  font-family: "Brutal Type", "Times New Roman", Times, serif;
  font-weight: 700;
  margin: 0;
`

const Description = styled.p`
  font-size: 24px;
  font-family: "Brutal Type", "Times New Roman", Times, serif;
`

const Highlighted = styled.span`
  color: rgb(255, 204, 0);
`
