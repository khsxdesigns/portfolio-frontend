import React from "react"
import styled from "styled-components"

// Utils
import breakpoint from "../../../utils/breakpoints/"
import { colors } from "../../../utils/variables/"

// Components
import Observer from "../../../components/observer/"
import Container from "../../../components/container/"

import Humans from "../../../assets/images/svg/single-01.svg"
import Strategy from "../../../assets/images/svg/spaceship.svg"
import Tools from "../../../assets/images/svg/pencil.svg"

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${breakpoint.medium`
    flex-wrap: nowrap;
    align-items: center;
  `}
`

const StyledWhoWeAre = styled.section`
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

  .who-we-are__grid {
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

  .who-we-are__item {
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

class WhoWeAre extends React.Component {
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
      const currentItem = event.target.getAttribute("data-who-we-are")
      const whoWeAreItems = document.querySelectorAll(".icon[data-who-we-are]")
      whoWeAreItems.forEach(item => {
        if (item.getAttribute("data-who-we-are") !== currentItem) {
          item.classList.add("non-active")
        }
      })
    }
  }

  handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      const whoWeAreItems = document.querySelectorAll(
        ".icon.non-active[data-who-we-are]"
      )
      whoWeAreItems.forEach(item => {
        item.classList.remove("non-active")
      })
    }
  }

  render = () => (
    <StyledWhoWeAre visible={this.state.isVisible}>
      <StyledContainer>
        <Observer onVisible={this.handleVisibility} threshold="0.5">
          <h1>
            Hi, I'm Kerrie. I'm a UX/Product Designer
            <br />
            <p>
              I help define, design, and launch user-centric digital products
              and human experiences.
            </p>
          </h1>
        </Observer>

        <div className="who-we-are__grid">
          <div className="grid__item">
            <div
              onMouseOver={this.handleMouseOver}
              onFocus={this.handleMouseOver}
              onMouseLeave={this.handleMouseLeave}
              aria-hidden="true"
              className="who-we-are__item indiblue"
            >
              <div className="icon" data-who-we-are="humans">
                <Humans />
              </div>
              <div className="content" data-who-we-are="humans">
                <div>
                  <h4>I’ll help you define what to build (and why)</h4>
                  <p>
                    It’s an important step that most teams skip over, because
                    they’re so excited to get started. I work with different
                    stakeholders to define a unified and tested idea of what
                    we’re building, who we’re building it for, and why.
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
              className="who-we-are__item watermelon"
            >
              <div className="icon" data-who-we-are="strategy">
                <Strategy />
              </div>
              <div className="content" data-who-we-are="strategy">
                <div>
                  <h4>I’ll design how it works and how it looks</h4>
                  <p>
                    If it doesn’t work the way your users expect it to, then a
                    slick design isn’t going to contribute much to success. My
                    background in both design and research puts me in a great
                    position to work with teams to bring digital products from
                    ‘meh’ to great!
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
              className="who-we-are__item supernova"
            >
              <div className="icon" data-who-we-are="tools">
                <Tools />
              </div>
              <div className="content" data-who-we-are="tools">
                <div>
                  <h4>I’ll help you scale design and launch your product</h4>
                  <p>
                    I have several years experience working closely with tech
                    teams to deliver, iterate, and scale design operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledWhoWeAre>
  )
}

export default WhoWeAre
