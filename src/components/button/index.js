import React from "react"
import styled from "styled-components"

// Utils
import { Link } from "gatsby"
import { colors, fonts } from "../../utils/variables"

const StyledButton = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 16px 32px;
  background-color: ${props => props.backgroundColor};
  color: ${props => (props.color ? props.color : colors.white)};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4em;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.6s;
  z-index: 1000;
  overflow: hidden;
  font-family: ${fonts.primary};

  &:hover {
    background-color: ${props =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : ""};

    color: ${props => (props.hoverColor ? props.hoverColor : "")};

    &:after {
      transform: translateX(100%);
      opacity: 1;
    }
  }
`

const Button = props => (
  <StyledButton
    className={props.className}
    to={props.to}
    backgroundColor={props.backgroundColor}
    color={props.color}
    hoverBackgroundColor={props.hoverBackgroundColor}
    hoverColor={props.hoverColor}
    {...props}
  >
    {props.text}
  </StyledButton>
)

export default Button
