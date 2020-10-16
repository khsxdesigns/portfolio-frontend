import React from "react"
import styled from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints/"
import { colors, fonts } from "../../utils/variables/"

// Components
import Observer from "../observer/"
import Container from "../container/"

const StyledContainer = styled(Container)`
  max-width: 738px;
`

const StyledHero = styled.section`
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  background-color: ${colors.midnight};
  color: ${colors.white};

  ${breakpoint.medium`
    height: 530px;
  `}
`

const Heading = styled.h2`
  font-weight: 400;

  span {
    color: ${props => (props.visible ? colors.supernova : colors.white)};
    font-family: ${fonts.primary};
    font-weight: 500;
    transition: all 1.5s;
    transition-delay: 0.6s;
  }
`

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  handleVisiblity = () => {
    this.setState({
      isVisible: true,
    })
  }

  render = props => (
    <StyledHero>
      <StyledContainer>
        <Observer onVisible={this.handleVisiblity}>
          <Heading visible={this.state.isVisible}>
            {this.props.title}
            <br />
            <span>{this.props.highlight}</span>
          </Heading>
        </Observer>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
