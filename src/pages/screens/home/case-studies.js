import React from "react"

// Libraries
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import styled from "styled-components"

// Utils
import breakpoint from "../../../utils/breakpoints/"
import { colors } from "../../../utils/variables/"

// Components
import Container from "../../../components/container/"
import Button from "../../../components/button/"

// Icons
import Arrow from "../../../assets/images/svg/keyboard-arrow-right.svg"

import ImageHere from "../../../assets/images/test.png"

const StyledProjects = styled.section`
  padding-bottom: 64px;
  padding-top: 64px;

  ${breakpoint.medium`
    padding-bottom: 80px;
    padding-bottom: 80px;
  `}

  .see-more {
    margin: 32px auto 0 auto;
    text-align: center;

    ${breakpoint.small`
      margin-top: 56px;
    `}
  }
`

const StyledCaseStudy = styled.article`
  margin-bottom: 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    
    .case-study__image {

      &::before,
      &::after {
        transform: scale(1.05);
      }
    }

    .case-study__details {
      .link {
        svg {
          circle {
            fill: ${colors.midnight};
          }
        }
      }
    }
  }

  ${breakpoint.large`
    margin-bottom: 80px;
  `}

  > a { 
    display: flex;
    flex-wrap: wrap;

    ${breakpoint.small`
      flex-wrap: no-wrap;
    `}
  }

  .case-study__image {
    width: 100%;
    height: 224px;
    transition: all 0.3s;
    overflow: hidden;

    ${breakpoint.small`
      order: ${props => (props.imageOnRight ? "1" : "0")};
      width: 50%;
      height: initial;
    `}

    &::before,
    &::after {
      transition: all .3s!important;
    }
  }

  .case-study__details {
    display: flex;
    flex-wrap: wrap;
    padding: 32px 16px;
    background-color: ${colors.cream};
    color: ${colors.stout};

    ${breakpoint.small`
      order: ${props => (props.imageOnRight ? "0" : "1")};
      width: 50%;
      min-height: 280px;
      padding: 32px 24px;
    `}

    ${breakpoint.medium`
      min-height: 364px;
      padding: 40px;
    `}

    ${breakpoint.large`
      min-height: 420px;
    `}

    .client {
      margin-bottom: 12px;
      color: ${colors.indiblue};
      font-weight: 700;
      text-transform: uppercase;
    }

    > div {
      margin-bottom: 32px;
    }

    .link {
      align-self: flex-end;
      display: inline-flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.3em;

      &:hover {

        svg {

          circle {
            fill: ${colors.midnight};
          }
        }
      }

      svg {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 8px;
        circle {
          fill: ${colors.indiblue};
          transition: all .3s;
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  background: url(${props => props.imageUrl});
  background-size: "cover";
  background-position: "center";
  background-repeat: "no-repeat";
`

const CaseStudy = props => (
  <StyledCaseStudy imageOnRight={props.imageOnRight}>
    <Link to={props.link}>
      <ImageContainer className="case-study__image" imageUrl={props.imageUrl} />
      <div className="case-study__details">
        <div>
          <h4 className="client">{props.client}</h4>
          <h3 className="title">{props.title}</h3>
        </div>

        <p className="link">
          <Arrow />
          Request to see case study
        </p>
      </div>
    </Link>
  </StyledCaseStudy>
)

const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <div class="subtitle">
          <h2>Case Studies</h2>
          <p>
            While I would love to share all the work I have done here, I have
            signed NDAs that prevent me from doing so. For a sampler of some of
            my works, you can view my Behance and my Dribbble. If you want to
            know more about me, my experience or my process, get in touch via
            LinkedIn and let's have a virtual coffee.
          </p>
        </div>

        {/* <CaseStudy
          imageUrl={ImageHere}
          client="Columbia University"
          title="Redesigning Columbia University's genomics app for on-the-go analysis"
          link="/work/acgen"
        />
        <CaseStudy
          imageOnRight
          imageUrl={ImageHere}
          client="Nubi"
          title="Designing a new product experience for a PayPal partner in the fintech industry"
          link="/work/nubi"
        /> */}

        <div className="see-more">
          <Button
            to="https://www.linkedin.com/in/kerriehui"
            backgroundColor={colors.indiblue}
            color={colors.white}
            hoverBackgroundColor={colors.midnight}
            text="Let's chat"
          />
        </div>
      </Container>
    </StyledProjects>
  )
}

export default Projects
