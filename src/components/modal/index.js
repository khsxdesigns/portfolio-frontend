import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints/"
import { colors } from "../../utils/variables/"

// Icons
import Close from "../../assets/images/svg/ic_close_24px.svg"

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
  background-color: ${colors.cream};
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: all 0.3s;
  overflow-y: auto;
  z-index: 9998;

  ${breakpoint.medium`
    padding: 64px 0;
  `}

  .modal__close {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 24px;
    right: 16px;
    text-align: right;
    transition: all 0.1s ease;
    cursor: pointer;
    z-index: 9999;

    ${breakpoint.small`
      top: 48px;
      right: 48px;
    `}

    ${breakpoint.medium`
      width: 48px;
      height: 48px;
    `}
  }
`

class Modal extends React.Component {
  componentDidMount = () => {
    document.addEventListener("keydown", event => {
      event = event || window.event
      if (event.keyCode === 27) {
        this.props.closeFunction()
      }
    })
  }

  render = props => (
    <StyledModal className={this.props.className} visible={this.props.visible}>
      <button
        className="modal__close"
        type="button"
        onClick={this.props.closeFunction}
      >
        <Close />
      </button>
      {this.props.children}
    </StyledModal>
  )
}

export default Modal
