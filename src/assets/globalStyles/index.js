import { createGlobalStyle } from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints/"
import { colors, fonts } from "../../utils/variables"

// Fonts
import BrutalTypeBold from "../../assets/fonts/BrutalType-Bold.ttf"
import BrutalTypeMedium from "../../assets/fonts/brutaltype-medium-webfont.ttf"
import BrutalTypeRegular from "../../assets/fonts/brutaltype-webfont.ttf"
import BrutalTypeLight from "../../assets/fonts/brutaltype-light-webfont.ttf"

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Brutal Type"
    font-weight: 400;
    src: url("${BrutalTypeLight}")
}

@font-face {
    font-family: "Brutal Type"
    font-weight: 500;
    src: url("${BrutalTypeRegular}")
}

@font-face {
    font-family: "Brutal Type"
    font-weight: 600;
    src: url("${BrutalTypeMedium}")
}
@font-face {
    font-family: "Brutal Type"
    font-weight: 600;
    src: url("${BrutalTypeBold}")
}

.no-scroll {
    overflow: hidden!important
}

body {
    color: ${colors.stout};
    font-family: ${
      fonts.secondary
    }, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    overflow-x: hidden;
}

${breakpoint.medium`
    font-size: 24px;
`}
div {
      display: block;
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 0;
      font-weight: 400;
      line-height: 1.2em;
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: ${
        fonts.primary
      }, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    }

    h1 {
      font-size: 40px;
      letter-spacing: -.02em;

      ${breakpoint.medium`
        font-size: 56px;
      `}
    }

    h2 {
      font-size: 34px;
      letter-spacing: -.01em;

      ${breakpoint.medium`
        font-size: 42px;
      `}
    }
    
    h3 {
      font-size: 24px;

      ${breakpoint.medium`
        font-size: 32px;
      `}
    }

    h4 {
      font-size: 16px;
      letter-spacing: .01em;
    }

    img,
    svg {
      display: inline-block;
      max-width: 100%;
      height: auto;
      width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    p {
      margin: 0;

      &.paragraph--small {
        font-size: 18px;
      }
    }

    button {
      padding: 0;
      margin: 0;
      background: none;
      font-family: inherit;
      font-size: inherit;
      border: 0;
      outline: 0;
    }

    .strikethrough {
      width: auto;
      position: relative;
      transition: all .3s;

      &::before {
        content: '';
        width: 0;
        height: 60%;
        position: absolute;
        bottom: 4px;
        left: -8px;
        border-radius: 8px;
        transform: rotate(-1deg);
        transition: all .3s;
        z-index: -1;
      }

      &:hover {

        &::before {
          width: calc(100% + 16px);
        }
      }
    }
  }
`

export default GlobalStyles
