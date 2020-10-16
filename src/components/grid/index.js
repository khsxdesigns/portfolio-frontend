import styled from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints"

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .grid__item {
    width: 100%;
    margin-bottom: ${props => props.gutter};

    &:last-child {
      margin-bottom: 0;
    }

    ${breakpoint.small`
      width: calc((100% - (${props => props.gutter} * (${props =>
      props.columns} - 1))) / ${props => props.columns});

      &:nth-last-child(-n + ${props => props.columns}) {
        margin-bottom: 0;
      }
    `}
  }
`

export default Grid
