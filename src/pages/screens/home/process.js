import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"

// Utils
import breakpoint from "../../../utils/breakpoints/"
import { colors, fonts } from "../../../utils/variables/"

// Components
import Container from "../../../components/container/"
import Observer from "../../../components/observer/"
import Modal from "../../../components/modal/"
// import Lottie from "../../../components/lottie/"

// Icons
import Asterisk from "../../../assets/images/svg/asterik.svg"
import Discover from "../../../assets/images/svg/Research.svg"
import Design from "../../../assets/images/svg/visual.svg"
import Test from "../../../assets/images/svg/test.svg"
import Iterate from "../../../assets/images/svg/iterate.svg"

// Image
import ImageHere from "../../../assets/images/test.png"
import Research from "../../../assets/images/research.png"
import DesignImage from "../../../assets/images/design.jpg"
import BuildImage from "../../../assets/images/build.jpg"
import TestImage from "../../../assets/images/test.jpg"

const StyledContainer = styled(Container)`
  max-width: 800px;

  ${breakpoint.medium`
    padding: 0;
  `}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledProcesses = styled.section`
  position: relative;
  padding: 80px 0 40px 0;
  background-color: ${colors.cream};

  ${breakpoint.medium`
    padding: 160px 0 120px 0;
    overflow: hidden;
  `}

  .subtitle {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2 {
    max-width: 580px;
    font-weight: 400;
    font-family: ${fonts.primary};

    span {
      width: 17px;
      height: 17px;
      position: relative;
      top: -12px;
      display: inline-block;
      margin-right: 4px;

      button {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        color: ${colors.indiblue};
        font-size: 42px;
        line-height: 22px;
        animation: ${rotate} 3s linear infinite;
        cursor: pointer;

        ${breakpoint.medium`
          top: -8px;
        `}

        svg {
          width: 100%;
          fill: ${colors.indiblue};
          height: auto;
        }
      }
    }
  }

  .processes__line {
    display: none;

    ${breakpoint.medium`
      width: 4px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(((100vw - 800px) / 2) - 50px);
      display: block;
      
      .progress {
        width: 100%;
        height: 0;
        background-color: ${colors.white};
      }
    `}

    ${breakpoint.large`
      left: calc(((100vw - 800px) / 2) - 122px);
    `}
  }
`

const CardsWrapper = styled.div`
  margin-top: 48px;

  ${breakpoint.small`
    margin-top: 72px;
  `}
`

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 40px auto;
  opacity: ${props => (props.visible ? "1" : "0.5")};
  transition: all 0.6s;

  ${breakpoint.small`
    max-width: 800px;
    min-height: 386px;
  `}

  ${breakpoint.medium`
    position: relative;
    flex-wrap: nowrap;
  `}

  .card {
    width: 100%;
    padding: 32px 24px;
    background-color: ${colors.white};
    font-size: 18px;

    ${breakpoint.medium`
      width: calc(100% - 384px);
      flex-shrink: 0;
      padding: 48px 32px;
    `}

    .subtitle {
      color: ${colors.indiblue};
      font-size: 16px;
    }

    .title {
      margin-bottom: 8px;
      font-size: 24px;
      font-weight: 500;
    }
  }

  .photo {
    flex-shrink: 0;
    width: 100%;
    height: 384px;

    ${breakpoint.medium`
      max-width: 384px;
      width: 50%;
      height: initial;
    `}
  }

  .card__icon {
    display: none;

    ${breakpoint.medium`
      width: 96px;
      height: 96px;
      position: absolute;
      top: 24px;
      left: -80px;
      display: flex;
    `}

    ${breakpoint.large`
      left: -166px;
    `}
  }
`

const ModalContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  ${breakpoint.small`
    height: auto;
  `}

  ${breakpoint.medium`
    position: relative;
  `}
`

const StyledModal = styled(Modal)`
  .modal__image {
    order: 0;
    width: 100%;
    margin-bottom: 24px;
    text-align: center;

    ${breakpoint.small`
      order: 1;
      width: calc(100% - 672px);
      margin-bottom: 0;
    `}

    img {
      max-width: 85%;

      ${breakpoint.small`
        max-width: 100%;
      `}
    }
  }

  .modal__content {
    max-width: 640px;
    order: 1;
    margin-bottom: 64px;

    ${breakpoint.small`
      order: 0;
    `}

    ${breakpoint.medium`
      margin-bottom: 0;
    `}

    h1 {
      color: ${colors.indiblue};
      font-family: ${fonts.primary};
      font-weight: 500;
    }

    .subtitle {
      color: ${colors.indiblue};
      font-family: ${fonts.primary};
      font-weight: 400;
      text-transform: lowercase;

      b {
        font-weight: 700;
      }
    }

    p {
      max-width: 544px;

      ${breakpoint.medium`
        font-size: 24px;
      `}
    }

    .dictionary {
      margin-top: 64px;

      ${breakpoint.large`
        position: absolute;
        left: 0;
        bottom: -120px;
        margin: 0;
      `}
    }
  }
`

class Heading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  closeModal = () => {
    if (this.state.showModal) {
      this.setState(
        {
          showModal: false,
        },
        () => {
          document.querySelector("html").classList.remove("no-scroll")
          document.querySelector("body").classList.remove("no-scroll")
        }
      )
    }
  }

  openModal = event => {
    if (!this.state.showModal) {
      this.setState(
        {
          showModal: true,
        },
        () => {
          document.querySelector("html").classList.add("no-scroll")
          document.querySelector("body").classList.add("no-scroll")
        }
      )
    }
  }

  render = () => (
    <React.Fragment>
      <p className="subtitle paragraph--small">Outcome driven using</p>
      <h2>
        Human-centered processes{" "}
        <i>
          a la Kerrie{" "}
          <span>
            <button type="button" onClick={this.openModal}>
              <Asterisk />
            </button>
          </span>
          style
        </i>
      </h2>

      <StyledModal
        visible={this.state.showModal}
        closeFunction={this.closeModal}
      >
        <ModalContainer>
          <div className="modal__content">
            <h1>
              <strike>Human</strike> Outcome-centered design
            </h1>
            <p className="subtitle">
              <i>[outcome-driven]</i> <b>noun.</b>
            </p>
            <br />
            <p>
              I am an <i>outcome-driven</i> designer. Whilst I'd love to push
              design to its limits and deliver out-of-this-world customer
              experiences, I'm a realist at heart. My approach to design focuses
              on providing value into the hands of the customer as fast as a
              business can, with its available resources.
              <br />
              <br />
              This means asking the right questions, solving the right problem
              with the available means, designing a great solution with
              attention-to-detail, and then testing and learning to improve the
              proposition after launch. If the solution I propose is not
              delivered, I may as well have not have designed at all.
            </p>

            <div className="dictionary">{/* <IndiDictionary /> */}</div>
          </div>
          <div className="modal__image">
            {/* <Lottie
              loop
              autoplay={this.state.showModal}
              animation={HumanCenteredAnimation}
            /> */}
          </div>
        </ModalContainer>
      </StyledModal>
    </React.Fragment>
  )
}

const ImageContainer = styled.div`
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  handleVisibility = () => {
    this.setState({
      isVisible: true,
    })
  }

  render = props => (
    <Observer onVisible={this.handleVisibility} threshold="0.5">
      <StyledCard visible={this.state.isVisible}>
        <div className="card">
          <p className="subtitle">{this.props.subtitle}</p>
          <br />
          <p className="title">{this.props.title}</p>
          <p>{this.props.description}</p>
        </div>
        <ImageContainer className="photo" imageUrl={this.props.imageUrl} />
        <div className="card__icon">{this.props.icon}</div>
      </StyledCard>
    </Observer>
  )
}

const Processes = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       discoverImage: file(
  //         relativePath: { eq: "services/processes-image-1.png" }
  //       ) {
  //         childImageSharp {
  //           fluid(maxWidth: 384, quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }

  //       strategizeImage: file(
  //         relativePath: { eq: "services/processes-image-2.png" }
  //       ) {
  //         childImageSharp {
  //           fluid(maxWidth: 384, quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }

  //       buildImage: file(relativePath: { eq: "services/processes-image-3.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 384, quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }

  //       iterateImage: file(
  //         relativePath: { eq: "services/processes-image-4.png" }
  //       ) {
  //         childImageSharp {
  //           fluid(maxWidth: 384, quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `)
  return (
    <StyledProcesses id="processes">
      <div className="processes__line">
        <div id="processesProgress" className="progress"></div>
      </div>
      <StyledContainer>
        <Heading />

        <CardsWrapper>
          <Card
            subtitle="Discover and Research"
            title="Who are your customers?"
            description="I'll dive deep at the start by asking lots of questions about your project and the goals you and your stakeholders wish to achieve. Then, we'll work together to gain insight into who your customers are, and what the burning problem to solve is, through research.
            "
            imageUrl={Research}
            icon={<Discover />}
          />

          <Card
            subtitle="Strategise"
            title="Design possible solutions"
            description="I'll analyse your existing process and tools, and tailor each project to fit you and your users’ needs. My background in design and research means I can help you every step along the way, starting from simple process diagrams, to high fidelity prototypes."
            imageUrl={DesignImage}
            icon={<Design />}
          />

          <Card
            subtitle="Build"
            title="Agile, scrum, get it done"
            description="I have several years of experience working inside and alongside agile teams. My goal is to eliminate the separation between design and development by speaking the same language (I'm a designer who can code!), help strengthen empathy and human-centered design capabilities, and to deliver innovative experiences. "
            imageUrl={BuildImage}
            icon={<Test />}
          />

          <Card
            subtitle="Iterate"
            title="Learn & Repeat"
            description="Delivery isn't the final measure of success, and I don't expect my designs to last the test of time forever. Integrated into my process is a continual testing framework, which will help measure on how we made a customer more successful, if we've reached a project's objective, and if there's room for improvement. "
            imageUrl={TestImage}
            icon={<Iterate />}
          />
        </CardsWrapper>
      </StyledContainer>
    </StyledProcesses>
  )
}

class ProcessesWrapper extends React.Component {
  componentDidMount = () => {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount = () => {
    document.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY
    const processesSection = document.getElementById("processes")
    const progressElement = document.getElementById("processesProgress")

    if (
      scrollPosition >=
      processesSection.offsetTop - window.innerHeight + 64
    ) {
      progressElement.style.height =
        scrollPosition -
        (processesSection.offsetTop - window.innerHeight + 64) +
        "px"
    }
  }

  render = () => <Processes />
}

export default ProcessesWrapper
