import React from "react"
import styled, { css } from "styled-components"

// Utils
import { Link } from "gatsby"
import breakpoint from "../../utils/breakpoints"
import { colors } from "../../utils/variables"

// Components
import ContextConsumer from "../context"
import Container from "../container"

// Images
import FullLogo from "../../assets/images/svg/logo.svg"
import Behance from "../../assets/images/svg/logo-behance.svg"
import Dribbble from "../../assets/images/svg/logo-dribbble.svg"
import LinkedIn from "../../assets/images/svg/logo-linkedin.svg"

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledMenu = styled.nav`
  max-width: 100vw;
  width: 100%;
  position: fixed;
  top: ${props => (props.isMounted ? "0" : "-64px")};
  right: 0;
  left: 0;
  padding: 32px 0;
  background-color: ${props => props.backgroundColor};
  opacity: ${props => (props.isMounted ? "1" : "0")};
  transition: all 0.6s;
  z-index: 9000;

  ${props =>
    !props.hasScrolled
      ? css`
          background-color: transparent;
        `
      : null}

  ${breakpoint.medium`
    padding: 64px 0;

    ${props =>
      props.hasScrolled
        ? css`
            padding: 24px 0;
          `
        : null}
  `}

  ${props =>
    props.isScrollingDown
      ? css`
          top: -160px;
        `
      : null}

  .menu__logo {
    position: relative;
    display: flex;
    z-index: 9001;

    svg {
      width: 32px;
      height: 32px;
      * {
        fill: ${props => (props.dark ? colors.midnight : null)};

        ${props =>
          props.open
            ? css`
                fill: ${colors.white};
              `
            : ``}
      }
    }
  }

  .menu__toggler {
    position: relative;
    z-index: 9001;

    ${breakpoint.small`
      display: none;
    `}

    span {
      width: 22px;
      height: 3px;
      position: relative;
      display: block;
      margin-bottom: 4px;
      background-color: ${props =>
        props.dark ? colors.midnight : colors.white};
      border-radius: 16px;
      transition: all 0.3s ease;

      &:last-child {
        margin: 0;
      }

      ${props =>
        props.open
          ? css`
              background-color: ${colors.white};
            `
          : ``}
    }

    .top {
      top: ${props => (props.open ? "7px" : "0")};
      transform: ${props => (props.open ? "rotate(45deg)" : "")};
    }

    .middle {
      opacity: ${props => (props.open ? "0" : "1")};
      visibility: ${props => (props.open ? "hidden" : "visible")};
    }

    .bottom {
      top: ${props => (props.open ? "-7px" : "0")};
      transform: ${props => (props.open ? "rotate(-45deg)" : "")};
    }
  }

  .menu__content {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 40px;
    background-color: ${colors.midnight};
    opacity: ${props => (props.open ? "1" : "0")};
    visibility: ${props => (props.open ? "visible" : "hidden")};
    transition: all 0.3s;

    ${breakpoint.small`
      width: auto;
      height: auto;
      position: relative;
      padding: 0;
      background-color: transparent;
      opacity: 1;
      visibility: visible;
    `}

    ul {
      margin-top: -32px;

      ${breakpoint.small`
        display: flex;
        align-items: center;
        margin: 0;
      `}
    }

    li {
      margin-bottom: 32px;

      &:last-child {
        margin: 0;
      }

      ${breakpoint.small`
        margin: 0 32px 0 0;
      `}

      a {
        color: ${colors.white};
        font-size: 40px;
        line-height: 1.2em;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        &:hover,
        &.active {
          border-color: ${colors.supernova};
        }

        ${breakpoint.small`
          position: relative;
          display: inline-block;
          color: ${props => (props.dark ? colors.midnight : colors.white)};
          font-size: 20px;
          font-weight: 500;
          line-height: 1.2em;
          z-index: 200;

          &:hover,
          &.active {
            border-color: ${props =>
              props.dark ? colors.midnight : colors.supernova};
          }
        `}
      }
    }

    .menu__social-links {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 64px;

      ${breakpoint.small`
        display: none;
      `}

      a {
        display: flex;
        margin-right: 42px;

        &:last-child {
          margin-right: 0;
        }

        svg {
          width: 22px;
          height: auto;
          fill: ${colors.white}
        }

        &:hover{

          svg{
            fill: ${colors.supernova}
          }}
      }
    }
  }
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMounted: false,
      isMenuOpen: false,
      hasScrolled: false,
      isScrollingDown: false,
      lastScrollPosition: 0,
      interval: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)

    if (!this.state.hasMounted) {
      this.setState({
        hasMounted: true,
      })
    }

    this.handleScroll()

    const interval = setInterval(() => {
      if (
        !this.state.isScrollingDown &&
        !this.state.isMenuOpen &&
        this.state.hasScrolled
      ) {
        this.setState({
          isScrollingDown: true,
        })
      }
    }, 4000)

    this.setState({
      interval: interval,
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
    this.setState({
      interval: null,
    })
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 16) {
      if (!this.state.hasScrolled) {
        this.setState({
          hasScrolled: true,
        })
      }
    } else {
      if (this.state.hasScrolled) {
        this.setState({
          hasScrolled: false,
        })
      }
    }

    if (
      scrollPosition > this.state.lastScrollPosition &&
      this.state.hasScrolled
    ) {
      if (!this.state.isScrollingDown) {
        this.setState({
          isScrollingDown: true,
        })
      }
    } else {
      if (this.state.isScrollingDown) {
        this.setState({
          isScrollingDown: false,
        })
      }
    }

    this.setState({
      lastScrollPosition: scrollPosition,
    })
  }

  closeMenu = () => {
    if (this.state.isMenuOpen) {
      this.setState(
        {
          isMenuOpen: false,
        },
        () => {
          document.querySelector("html").classList.remove("no-scroll")
          document.querySelector("body").classList.remove("no-scroll")
        }
      )
    }
  }

  toggleMenu = () => {
    this.setState(
      {
        isMenuOpen: !this.state.isMenuOpen,
      },
      () => {
        if (this.state.isMenuOpen) {
          document.querySelector("html").classList.add("no-scroll")
          document.querySelector("body").classList.add("no-scroll")
        } else {
          document.querySelector("html").classList.remove("no-scroll")
          document.querySelector("body").classList.remove("no-scroll")
        }
      }
    )
  }

  render = props => (
    <ContextConsumer>
      {({ data }) => (
        <StyledMenu
          isMounted={this.state.hasMounted}
          dark={data.darkMenu}
          backgroundColor={this.props.backgroundColor}
          hasScrolled={this.state.hasScrolled}
          isScrollingDown={this.state.isScrollingDown}
          open={this.state.isMenuOpen}
        >
          <StyledContainer>
            <Link
              aria-label="Logo"
              className="menu__logo"
              to="/"
              onClick={this.closeMenu}
            >
              <FullLogo />
            </Link>

            <button
              className="menu__toggler"
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </button>

            <div className="menu__content">
              <div>
                <ul>
                  {/* <li>
                    {/* <Link
                      onClick={this.closeMenu}
                      to="/work"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={this.closeMenu}
                      to="/services"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={this.closeMenu}
                      to="/about"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      About
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      onClick={this.closeMenu}
                      href="mailto:khsxdesigns@gmail.com"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="menu__social-links">
                  <a
                    href="https://www.behance.net/kerriehui?tracking_source=search_users_recommended%7Ckerrie%20hui"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                  >
                    <Behance />
                  </a>

                  <a
                    href="https://dribbble.com/kerriehui"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble"
                  >
                    <Dribbble />
                  </a>

                  <a
                    href="https://linkedin.com/in/kerriehui"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </StyledContainer>
        </StyledMenu>
      )}
    </ContextConsumer>
  )
}

export default Menu

// const Nav = () => (
//   <Navbar>
//     <NavContentContainer>
//       <div>
//         {/* <ul className="nav__left--block">
//             <li>
//               <Link to="/">Str</Link>
//             </li>
//           </ul> */}
//       </div>

//       <div>
//         <ul>
//           <StaticQuery
//             query={graphql`
//               query {
//                 allStrapiCategory {
//                   edges {
//                     node {
//                       strapiId
//                       name
//                     }
//                   }
//                 }
//               }
//             `}
//             render={data =>
//               data.allStrapiCategory.edges.map((category, i) => {
//                 return (
//                   <li key={category.node.strapiId}>
//                     <Link to={`/category/${category.node.strapiId}`}>
//                       {category.node.name}
//                     </Link>
//                   </li>
//                 )
//               })
//             }
//           />
//         </ul>
//       </div>
//     </NavContentContainer>
//   </Navbar>
// )

// export default Nav

// const Navbar = styled.nav`
//   max-width: 100vw;
//   width: 100%;
//   position: fixed;
//   top: 0px;
//   right: 0px;
//   left: 0px;
//   padding: 32px 0px;
//   opacity 1;
//   transition: all 0.6s ease 0s;
//   z-index: 9000;
//   background-color: transparent;

//   @media and (min-width: 1024px) {
//     padding: 64px 0px;
//   }
// `
// const NavContentContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 1120px;
//   width: 100%;
//   padding: 0 24px;
//   margin: 0px auto;

//   @media and (min-width: 1200px) {
//     padding: 0px;
//   }

//   @media and (min-width: 768px) {
//     padding: 48px;
//   }
// `
