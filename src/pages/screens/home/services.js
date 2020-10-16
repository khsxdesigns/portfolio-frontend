import React from "react"

// Libraries
import styled, { keyframes } from "styled-components"
import Lottie from "../../../components/lottie/"
// Utils
import breakpoint from "../../../utils/breakpoints/"
import { colors, fonts } from "../../../utils/variables/"

// Components
import Container from "../../../components/container/"
import LinkWithIcon from "../../../components/link-with-icon"

// Icons
import Arrow from "../../../assets/images/svg/keyboard-arrow-right.svg"

// // Animations
// import DesignSprint from "assets/animations/homepage/design-sprint-animation.json"
// import Branding from "assets/animations/homepage/branding-animation.json"
// import DigitalProducts from "assets/animations/homepage/digital-products-animation.json"

const StyledServices = styled.section`
  padding: 56px 0 64px 0;
  background-color: ${colors.supernova};
  color: ${colors.stout};

  ${breakpoint.small`
    padding: 64px 0 96px 0;
  `}

  ${breakpoint.medium`
    padding: 124px 0;
  `}

  .container {
    position: relative;
  }

  .carousel__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${breakpoint.small`
      margin-bottom: 24px;
    `}

    ${breakpoint.large`
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 8000;
    `}

    .navigation-arrows {
      display: flex;
      align-items: center;

      .arrow {
        display: flex;
        cursor: pointer;

        &.arrow--next {
          transform: rotate(180deg);
        }

        &:hover {
          svg {
            * {
              fill: ${colors.watermelon};
            }
          }
        }

        svg {
          width: 40px;
          height: auto;

          * {
            transition: all 0.3s;
          }
        }
      }
    }
  }

  .design-sprint__carousel {
    display: flex;
    overflow: hidden;

    .slide {
      width: 100%;
      flex-shrink: 0;
      transition: all .5s;

      .slide__inner {
        max-width: 1120px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 24px;
        margin: 0 auto;

        ${breakpoint.small`
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
        `}

        ${breakpoint.large`
          padding: 0;
        `}
      }

      .slide__image {
        order: 0;
        width: 100%;
        height: 310px;
        position: relative;
        display: flex;
        align-items: center;

        @media screen and (max-width: 767px) {
          max-width: 320px;
          max-height: 310px;
          margin: 0 auto;
        }

        ${breakpoint.small`
          order: 1;
          width: 320px;
          height: 305px;
        `}

        ${breakpoint.medium`
          width: 424px;
          height: 406px;
        `}

        ${breakpoint.large`
          width: 600px;
          height: 600px;
        `}

        ${breakpoint.extraLarge`
          width: 600px;
          height: 600px;
        `}

        > div {
          width: 100%;
          height: auto;
          position: relative;
        }

        &[data-services="1"] {
          & > div:nth-child(1) {
            opacity: 1;
            z-index: 1000;
          }

          & > div:nth-child(2),
          & > div:nth-child(3) {
            opacity: 0;
            z-index: 1;
          }
        }

        &[data-services="2"] {
          & > div:nth-child(2) {
            opacity: 1;
            z-index: 1000;
          }

          & > div:nth-child(1),
          & > div:nth-child(3) {
            opacity: 0;
            z-index: 1;
          }
        }

        &[data-services="3"] {
          & > div:nth-child(3) {
            opacity: 1;
            z-index: 1000;
          }

          & > div:nth-child(1),
          & > div:nth-child(2) {
            opacity: 0;
            z-index: 1000;
          }
        }

        & > div {
          width: 100%;
          height: auto!important;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: all 1s ease;

          &.active {
            opacity: 1;
          }
        }
      }

      .slide__content {
        order: 1;
        width: 100%;

        ${breakpoint.small`
          order: 0;
          width: 340px;
        `}

        ${breakpoint.medium`
          width: 424px;
        `}

        ${breakpoint.large`
          width: 520px;
        `}

        h2 {
          display: flex;
          flex-direction: column;
          height: 1.2em;
          overflow: hidden;
          font-family: ${fonts.primary};
          
          span {
            transform: translateY(calc(-1.2em * (${props =>
              props.currentSlide} - 1)));
            transition: transform 1s ease;
          }
        }

        .together {
          font-weight: 500;
        }

        .overline {
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 0.2em;
            font-family: ${fonts.primary};
            margin-bottom: 16px;
        }

        .descriptions {
          width: 100%;
          height: 135px;
          display: flex;
          flex-direction: column;
          margin: 16px 0 24px 0;
          overflow: hidden;

          ${breakpoint.medium`
            height: 160px;
            margin: 40px 0 46px 0;
          `}

          p {
            width: 100%;
            height: 100%;
            margin-bottom: 65px;
            flex-shrink: 0;
            transform: translateY(calc(-200px * (${props =>
              props.currentSlide} - 1)));
            transition: transform 1s ease;

            &:last-child {
              margin-bottom: 0;
            }

            ${breakpoint.medium`
              margin-bottom: 80px;
              transform: translateY(calc(-240px * (${props =>
                props.currentSlide} - 1)));
            `}
          }
        }
      }
    }
  }
`

const Fill = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`

const ProgressBar = styled.div`
  width: 160px;
  height: 4px;
  background-color: #ceac10;
  border-radius: 4px;
  overflow: hidden;

  .progress {
    width: 0;
    height: 100%;
    background-color: ${colors.white};
    transition: width 15s ease-in-out;

    &.animated {
      animation: ${Fill} linear 15s infinite;
    }
  }
`

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 1,
      interval: null,
    }
  }

  componentDidMount = () => {
    const interval = setInterval(() => {
      this.handleNext()
    }, 15000)
    this.setState({
      interval: interval,
    })
  }

  handlePrev = () => {
    if (this.state.currentSlide > 1) {
      this.setState(
        {
          currentSlide: this.state.currentSlide - 1,
        },
        () => {
          this.handleSlideTransition()
        }
      )
    } else {
      this.setState(
        {
          currentSlide: 3,
        },
        () => {
          this.handleSlideTransition()
        }
      )
    }
  }

  handleNext = () => {
    if (this.state.currentSlide < 3) {
      this.setState(
        {
          currentSlide: this.state.currentSlide + 1,
        },
        () => {
          this.handleSlideTransition()
        }
      )
    } else {
      this.setState(
        {
          currentSlide: 1,
        },
        () => {
          this.handleSlideTransition()
        }
      )
    }
  }

  handleIntervalReset = () => {
    // Resets inverval
    const interval = setInterval(() => {
      this.handleNext()
    }, 15000)

    clearInterval(this.state.interval)

    this.setState({
      interval: interval,
    })

    // Resets progress bar
    const progressBarWrapper = document.getElementById("progressBarWrapper")
    const oldProgressBar = document.getElementById("progressBar")
    const newProgressBar = oldProgressBar.cloneNode()

    progressBarWrapper.removeChild(oldProgressBar)
    progressBarWrapper.appendChild(newProgressBar)
  }

  handleSlideTransition = () => {
    this.handleIntervalReset()
  }

  render = () => (
    <StyledServices currentSlide={this.state.currentSlide}>
      <Container className="container">
        <div className="carousel__controls">
          <ProgressBar id="progressBarWrapper">
            <div id="progressBar" className="progress animated"></div>
          </ProgressBar>

          <div className="navigation-arrows">
            <button
              aria-label="Previous Service"
              type="button"
              className="arrow arrow--prev"
              onClick={this.handlePrev}
            >
              <Arrow />
            </button>

            <button
              aria-label="Next Service"
              type="button"
              className="arrow arrow--next"
              onClick={this.handleNext}
            >
              <Arrow />
            </button>
          </div>
        </div>
      </Container>

      <div className="design-sprint__carousel" id="designSprintCarousel">
        <div className="slide">
          <div className="slide__inner">
            <div className="slide__content">
              <p className="overline">My services</p>
              <h2>
                <span className="active" data-services="1">
                  Define what to build
                </span>
                <span data-services="2">Design how it works</span>
                <span data-services="3">Launch & scale design</span>
              </h2>
              <h2 className="together">together.</h2>

              <div className="descriptions">
                <p data-services="1">
                  It’s an important step that most teams skip over, because
                  they’re so excited to get started. I work with different
                  stakeholders to define a unified and tested idea of what we’re
                  building, who we’re building it for, and why.
                </p>
                <p data-services="2">
                  If it doesn’t work the way your users expect it to, then a
                  slick design isn’t going to contribute much to success. My
                  background in both design and research puts me in a great
                  position to work with your team to bring digital products from
                  ‘meh’ to great!
                </p>
                <p data-services="3">
                  I have several years experience working closely with tech
                  teams to deliver, iterate, and scale digital products and
                  design operations.
                </p>
              </div>

              <LinkWithIcon
                to="/services"
                text="Discover my services & processes"
                iconColor={colors.indiblue}
              />
            </div>

            <div
              className="slide__image"
              data-services={this.state.currentSlide}
            >
              {/* <Lottie animation={DesignSprint} autoplay loop />
              <Lottie animation={Branding} autoplay loop />
              <Lottie animation={DigitalProducts} autoplay loop /> */}
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  )
}

export default Services
