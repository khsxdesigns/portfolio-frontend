import React, { useState } from "react"
import styled from "styled-components"

// Utils
import { Link } from "gatsby"
import breakpoint from "../../utils/breakpoints/"
import { colors } from "../../utils/variables/"

// Components
import ContextConsumer from "../context/"
import Container from "../container/"
import Button from "../button/"
import Observer from "../observer/"

// Icons
// import Instagram from "assets/icons/icon-instagram.inline.svg"
import Behance from "../../assets/images/svg/logo-behance.svg"
import Dribbble from "../../assets/images/svg/logo-dribbble.svg"
import LinkedIn from "../../assets/images/svg/logo-linkedin.svg"
// import YellowCircle from "assets/icons/footer-yellow-circle.inline.svg"
// import CyanCircle from "assets/icons/footer-cyan-circle.inline.svg"

const StyledFooter = styled.footer`
  position: relative;
  display: ${props => (props.show ? "block" : "none")};
  padding: 70px 0 52px 0;
  background-color: ${props =>
    props.yellow ? colors.supernova : colors.midnight};
  color: ${props => (props.yellow ? colors.midnight : colors.white)};
  overflow: hidden;

  ${breakpoint.medium`
    padding: 140px 0 104px 0;
  `}

  h1 {
    max-width: 580px;

    ${breakpoint.small`
      width: 60%;
    `}
  }

  .footer__first-section {
    position: relative;
    display: ${props => (props.simplified ? "none" : "block")};
    margin-bottom: 88px;

    ${breakpoint.small`
      position: initial;
    `}

    ${breakpoint.medium`
      margin-bottom: 175px;
    `}
  }

  .footer__sitemap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${breakpoint.medium`
      flex-wrap: nowrap;
      align-items: flex-end;
    `}

    > div {
      margin-bottom: 48px;

      ${breakpoint.medium`
        margin: 0;
      `}
    }

    .contact-info {
      order: 2;
      width: 100%;
      margin-bottom: 0;
      font-size: 18px;

      ${breakpoint.medium`
        order: 0;
        width: auto;
      `}

      .mail {
        font-size: 24px;
      }

      .copyright {
        ${breakpoint.medium`
          margin-top: 16px;
        `}
      }
    }

    .links {
      order: 0;
      width: 100%;
      font-size: 18px;

      ${breakpoint.medium`
        order: 1;
        width: auto;
      `}

      > div {
        display: flex;

        ul:first-child {
          margin-right: 72px;

          ${breakpoint.medium`
            margin-right: 120px;
          `}

          li {
            margin-bottom: 24px;

            ${breakpoint.medium`
              margin-bottom: 0;
            `}

            &:last-child {
              margin: 0;
            }
          }

          a {
            display: flex;
          }
        }

        li {
          margin-bottom: 24px;

          ${breakpoint.medium`
            margin-bottom: 0;
          `}

          &:last-child {
            margin-bottom: 0;
          }

          a {
            transition: all 0.3s;

            &:hover {
              color: ${props =>
                props.yellow ? colors.indiblue : colors.supernova};
            }
          }
        }
      }
    }

    .social-links {
      order: 1;

      ${breakpoint.medium`
        order: 2;
      `}

      ul {
        display: flex;

        ${breakpoint.medium`
          display: block;
        `}

        li {
          margin-right: 40px;

          svg {
            fill: ${colors.white};
          }

          ${breakpoint.medium`
            margin: 0 0 16px 0;
          `}

          &:last-child {
            margin: 0;
          }

          a {
            display: flex;

            &:hover {
              svg {
                * {
                  fill: ${props =>
                    props.yellow ? colors.indiblue : colors.supernova};
                }
              }
            }

            svg {
              width: 24px;
              height: 24px;

              * {
                fill: ${props => (props.yellow ? colors.midnight : "")};
                transition: all 0.3s;
              }
            }
          }
        }
      }
    }
  }
`

const FooterIcons = styled.div`
  width: 90px; // Because it's rotated, this is height
  height: 130px; // Because it's rotated, this is width
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -36px;
  left: calc(100% - 82px);
  transform: rotate(90deg);

  ${breakpoint.small`
    width: 204px;
    height: auto;
    top: 0;
    right: 0;
    left: auto;
    bottom: auto;
    transform: rotate(0deg);
  `}

  ${breakpoint.medium`
    width: auto;
  `}

  ${breakpoint.large`
    right: calc(((100vw - 1120px) / 2) - 153px);
  `}

  svg {
    position: relative;
    transition: all 1.3s ease;

    &:first-child {
      transform: ${props =>
        props.isVisible ? "translateY(0)" : "translateY(-80px)"};
      z-index: 10;

      circle {
        stroke: ${props => (props.yellow ? colors.cream : "")};
      }
    }

    &:last-child {
      // top: -18%;
      transform: ${props =>
        props.isVisible ? "translateY(-28%)" : "translateY(0)"};
      z-index: 9;

      ${breakpoint.medium`
        top: -94px;
        transform: ${props =>
          props.isVisible ? "translateY(0)" : "translateY(120px)"};
      `}
    }
  }
`

const Footer = () => {
  const [isVisible, setVisibility] = useState(false)

  const handleVisibility = () => {
    if (!isVisible) {
      setVisibility(true)
    }
  }

  return (
    <ContextConsumer>
      {({ data }) => (
        <StyledFooter
          show={data.showFooter}
          simplified={data.simplifiedFooter}
          yellow={data.useYellowFooter}
        >
          <Container>
            <Observer onVisible={handleVisibility} threshold="1.0">
              <div className="footer__first-section">
                <h2>Let's work together on your next project</h2>
                <br />
                <Button
                  to="https://linkedin.com/in/kerriehui"
                  text="Get in touch"
                  backgroundColor={
                    data.useYellowFooter ? colors.white : colors.supernova
                  }
                  color={colors.midnight}
                  hoverBackgroundColor={
                    data.useYellowFooter ? colors.midnight : colors.white
                  }
                  hoverColor={
                    data.useYellowFooter ? colors.white : colors.midnight
                  }
                />

                <FooterIcons
                  isVisible={isVisible}
                  simplified={data.simplifiedFooter}
                  yellow={data.useYellowFooter}
                >
                  {/* <YellowCircle />
                  <CyanCircle /> */}
                </FooterIcons>
              </div>
            </Observer>

            <div className="footer__sitemap">
              <div className="contact-info">
                <p>
                  Sydney, Australia
                  <br />
                  <a
                    href="mailto:khsxdesigns@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    khsxdesigns@gmail.com
                  </a>
                </p>
                <br />
                <br />
                <p className="copyright">© Kerrie Hui 2020</p>
              </div>

              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.behance.net/kerriehui?tracking_source=search_users_recommended%7Ckerrie%20hui"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Medium"
                    >
                      <Behance />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/kerriehui"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dribbble"
                    >
                      <Dribbble />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/kerriehui"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </StyledFooter>
      )}
    </ContextConsumer>
  )
}

export default Footer
