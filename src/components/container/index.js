import React from "react"
import styled from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints"

const StyledContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;

  ${breakpoint.small`
    padding: 0 48px;
  `}

  ${breakpoint.large`
    padding: 0;
  `}
`

const Container = props => (
  <StyledContainer className={props.className} {...props}>
    {props.children}
  </StyledContainer>
)

export default Container
