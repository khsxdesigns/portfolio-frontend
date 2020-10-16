import React from "react"
import styled from "styled-components"

// Libraries
import { Link } from "gatsby"

// Utils
import { colors } from "../../utils/variables/"

// Icons
import Arrow from "../../assets/images/svg/keyboard-arrow-right.svg"

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3em;

  &:hover {
    svg {
      circle {
        fill: ${props =>
          props.iconColor === colors.indiblue
            ? colors.midnight
            : colors.indiblue};
      }
    }
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 25px;
    display: inline-block;
    margin-right: 8px;

    circle {
      fill: ${props =>
        props.iconColor === colors.indiblue
          ? colors.indiblue
          : colors.supernova};
      transition: all 0.3s;
    }
  }
`

const LinkWithIcon = props => (
  <StyledLink to={props.to} iconColor={props.iconColor} {...props}>
    <Arrow />
    {props.text}
  </StyledLink>
)

export default LinkWithIcon
