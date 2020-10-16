import React from "react"
import styled from "styled-components"

import Arrow from "../../assets/images/svg/keyboard-arrow-right.svg"

// Icons

const StyledLink = styled.span`
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3em;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 25px;
    display: inline-block;
    margin-right: 8px;
    transition: all 0.3s;

    * {
      transition: all 0.3s;
    }
  }
`

const ButtonWithIcon = props => (
  <StyledLink {...props}>
    <Arrow />
    {props.text}
  </StyledLink>
)

export default ButtonWithIcon
