import React from "react"
import styled from "styled-components"

// Utils
import { colors } from "utils/variables/"

// Icons
import Caret from "../../assets/images/svg/ic_keyboard_arrow_down_24px.svg"
import Check from "../../assets/images/svg/ic_check_24px.svg"

const StyledDropdown = styled.div`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
  }

  .dropdown__title {
    width: 100%;
    position: relative;
    text-align: left;
    border-bottom: 1px solid;
    border-color: ${props => (props.active ? colors.midnight : colors.cloudy)};
    transition: all 0.3s;

    button {
      padding: 8px 42px 8px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s;
      box-sizing: border-box;

      &::after {
        content: url(${Caret});
        width: 11px;
        height: 7px;
        position: absolute;
        top: calc((100% - 7px) / 2);
        right: 24px;
        display: flex;
        align-items: center;
        transform: ${props =>
          props.active ? "rotate(180deg)" : "rotate(0deg)"};
        transition: all 0.3s;
      }

      span {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .dropdown__list {
    width: 100%;
    display: ${props => (props.active ? "block" : "none")};
    margin-top: 8px;
    border: ${props => (props.active ? `1px solid ${colors.cloudy}` : "0")};
    transition: max-height 0.3s;
    overflow: hidden;

    li {
      background: transparent;
      border-bottom: 1px solid ${colors.cloudy};
      transition: all 0.3s;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(48, 152, 243, 0.1),
            rgba(48, 152, 243, 0.1)
          ),
          #ffffff;
      }

      &:last-child {
        border: 0;
      }

      button {
        position: relative;
        padding: 16px 40px 16px 16px;

        &.selected {
          color: ${colors.indiblue};

          &::after {
            content: url(${Check});
            display: block;
            position: absolute;
            top: 16px;
            right: 22px;
          }
        }
      }
    }
  }
`

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      selectedOption: "",
    }
  }

  componentDidMount = () => {
    if (this.props.defaultOption) {
      this.setState({
        selectedOption: this.props.defaultOption,
      })
    } else if (this.props.options) {
      this.setState({
        selectedOption: this.props.options[0],
      })
    }
  }

  openModal = () => {
    this.setState({
      open: true,
    })
  }

  closeModal = () => {
    this.setState({
      open: false,
    })
  }

  toggleDropdown = () => {
    if (this.state.open) {
      this.closeModal()
    } else {
      this.openModal()
    }
  }

  handleOptionClick = newOption => {
    this.setState(
      {
        selectedOption: newOption,
      },
      this.closeModal()
    )
  }

  render = () => (
    <StyledDropdown active={this.state.open}>
      <div className="dropdown__title">
        <button type="button" onClick={this.toggleDropdown}>
          <span>{this.state.selectedOption}</span>
        </button>
      </div>
      <ul className="dropdown__list">
        {this.props.options.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              key={option}
              name={this.props.name}
              className={option === this.state.selectedOption ? "selected" : ""}
              onClick={event => {
                this.handleOptionClick(option)
                this.props.callbackFunction(event)
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </StyledDropdown>
  )
}

export default Dropdown
