import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"

// Utils
import breakpoint from "../../../utils/breakpoints"
import { colors, fonts } from "../../../utils/variables/"

// Components
import Container from "../../../components/container"
import Observer from "../../../components/observer/"

import Define from "../../../assets/images/svg/define.svg"
import Design from "../../../assets/images/svg/design.svg"
import Launch from "../../../assets/images/svg/launch.svg"

const StyledHero = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colors.midnight};
  color: ${colors.white};
  overflow: hidden;
  padding: 80px 0;

  ${breakpoint.medium`
        height: 100vh;
        padding: 0;
      `}

  h1 {
    max-width: 652px;
    position: relative;
    font-family: ${fonts.primary};
    z-index: 1001;

    p {
      margin-top: 16px;
      line-height: 1.4em;
      color: ${props => (props.visible ? colors.supernova : colors.white)};
      font-size: 24px;
      font-family: ${fonts.primary};
      font-weight: 500;
      transition: all 1.5s;
      transition-delay: 0.6s;
    }
  }

  .hero__animation {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    opacity: ${props => (props.visible ? "1" : "0")};
    transition: all 2s;

    ${breakpoint.medium`
      top: 0;
    `}

    > div {
      display: flex;
    }
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${breakpoint.medium`
    flex-wrap: nowrap;
    align-items: center;
  `}
`

const StyledTrio = styled.section`
  padding: 80px 0;

  ${breakpoint.medium`
    padding: 160px 0;
  `}

  h2 {
    max-width: 520px;
    font-weight: 400;
    letter-spacing: 0;

    ${breakpoint.medium`
      opacity: ${props => (props.visible ? "1" : "0")};
      transition: all .6s;
    `}
  }

  .trio__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;

    ${breakpoint.medium`
      width: 350px;
      margin: 0;
    `}

    ${breakpoint.large`
      width: 416px;
    `}

    .grid__item {
      width: 100%;
      margin-bottom: 48px;

      ${breakpoint.small`
        width: calc((100% - 40px) / 3);
        margin: 0;
      `}

      ${breakpoint.medium`
        width: calc((100% - 20px) / 2);
      `}

      &:first-child {
        ${breakpoint.medium`
          width: 100%;
        `}
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .trio__item {
    text-align: center;

    &.indiblue {
      .icon {
        background-color: ${colors.indiblue};
      }
    }

    &.watermelon {
      .icon {
        background-color: ${colors.watermelon};
      }
    }

    &.supernova {
      .icon {
        background-color: ${colors.supernova};
      }
    }

    ${breakpoint.medium`
      width: 165px;
      height: 165px;
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 auto;

      &.indiblue {
        .content {
          background-color: ${colors.indiblue};
          color: ${colors.white};
        }
      }

      &.watermelon {
        .content {
          background-color: ${colors.watermelon};
          color: ${colors.white};
        }
      }

      &.supernova {
        .content {
          background-color: ${colors.supernova};
        }
      }

      &:hover {

        .content {
          opacity: 1;
          z-index: 200;
        }
      }
    `}

    ${breakpoint.large`
      width: 196px;
      height: 196px;
    `}

    .icon {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border-radius: 50%;
      transition: all 0.6s ease 0.4s;

      ${breakpoint.medium`
        width: ${props => (props.visible ? "165px" : "0")};
        height: ${props => (props.visible ? "165px" : "0")};

        &.non-active {
          background-color: transparent;
        }
      `}

      ${breakpoint.large`
        width: ${props => (props.visible ? "196px" : "0")};
        height: ${props => (props.visible ? "196px" : "0")};
      `}

      svg {
        width: auto;
        height: 32px;

        ${breakpoint.medium`
          height: 84px;
        `}

        ${breakpoint.large`
          height: 100px;
        `}
      }
    }

    .content {
      margin-top: 24px;
      font-size: 18px;

      ${breakpoint.medium`
        width: 284px;
        height: 284px;
        position: absolute;
        top: -60px;
        left: -60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin: auto;
        border-radius: 50%;
        opacity: 0;
        transition: all .6s;
      `}

      ${breakpoint.large`
        top: -44px;
        left: -44px;
      `}

      h4 {
        margin-bottom: 8px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
`

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  handleVisibility = () => {
    if (!this.state.isVisible) {
      this.setState({
        isVisible: true,
      })
    }
  }

  handleMouseOver = event => {
    if (window.innerWidth >= 1024) {
      const currentItem = event.target.getAttribute("data-trio")
      const trioItems = document.querySelectorAll(".icon[data-trio]")
      trioItems.forEach(item => {
        if (item.getAttribute("data-trio") !== currentItem) {
          item.classList.add("non-active")
        }
      })
    }
  }

  handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      const trioItems = document.querySelectorAll(".icon.non-active[data-trio]")
      trioItems.forEach(item => {
        item.classList.remove("non-active")
      })
    }
  }

  render = () => (
    <StyledHero>
      <Container>
        <StyledTrio visible={this.state.isVisible}>
          <StyledContainer>
            <Observer onVisible={this.handleVisibility} threshold="0.5">
              <h1>
                Hi, I'm Kerrie. I'm a UX/Product Designer
                <br />
                <p>
                  I help define, design, and launch user-centric digital
                  products and human experiences.
                </p>
              </h1>
            </Observer>

            <div className="trio__grid">
              <div className="grid__item">
                <div
                  onMouseOver={this.handleMouseOver}
                  onFocus={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                  aria-hidden="true"
                  className="trio__item indiblue"
                >
                  <div className="icon" data-trio="humans">
                    <Define />
                  </div>
                  <div className="content" data-trio="humans">
                    <div>
                      <h4>Define</h4>
                      <p>
                        I work with you, your team, and your stakeholders to
                        understand customer needs and define actionable problems
                        to solve for your customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid__item">
                <div
                  onMouseOver={this.handleMouseOver}
                  onFocus={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                  aria-hidden="true"
                  className="trio__item watermelon"
                >
                  <div className="icon" data-trio="strategy">
                    <Design />
                  </div>
                  <div className="content" data-trio="strategy">
                    <div>
                      <h4>Design</h4>
                      <p>
                        My background in both design and research puts me in a
                        great position to bring your digital products from ‘meh’
                        to great!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid__item">
                <div
                  onMouseOver={this.handleMouseOver}
                  onFocus={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                  aria-hidden="true"
                  className="trio__item supernova"
                >
                  <div className="icon" data-trio="tools">
                    <Launch />
                  </div>
                  <div className="content" data-trio="tools">
                    <div>
                      <h4>Launch and Scale</h4>
                      <p>
                        I have several years experience working closely with
                        tech teams to deliver, iterate, and scale design
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledContainer>
        </StyledTrio>
      </Container>
    </StyledHero>
  )
}

export default Hero
