import styled from "styled-components"

// Utils
import { colors, fonts } from "../../utils/variables/"

const Form = styled.form`
  font-family: ${fonts.secondary};

  * {
    outline: 0;
    -webkit-appearance: none;

    &:focus {
      outline: 0;
      box-shadow: 0;
    }
  }

  input,
  textarea {
    width: 100%;
    display: block;
    padding: 8px 0;
    background: transparent;
    font-family: ${fonts.secondary};
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid ${colors.cloudy};
    transition: all 0.3s;
    box-sizing: border-box;

    &:focus {
      border-color: ${colors.stout};
    }

    &::placeholder {
      color: ${colors.stone};
      opacity: 1;
      transition: all 0.3s;
    }

    &.validated {
      border-color: ${colors.indiblue};
    }
  }

  textarea {
    font-family: ${fonts.secondary};
    resize: none;
  }

  .form__group {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    &.align--right {
      text-align: right;
    }
  }

  .form__label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export default Form
