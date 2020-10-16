import React from "react"

// Libraries
import Lottie from "react-lottie"

// Components
import Observer from "../observer/"

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  handleVisibility = () => {
    if (!this.state.isVisible) {
      this.setState({
        isVisible: true,
      })
    }
  }

  render = props => {
    const options = {
      loop: this.props.loop ? this.props.loop : false,
      autoplay: false,
      animationData: this.props.animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <Observer
        onVisible={this.handleVisibility}
        threshold={this.props.threshold ? this.props.threshold : "1.0"}
      >
        <Lottie
          options={options}
          isPaused={!this.state.isVisible}
          isClickToPauseDisabled={true}
        />
      </Observer>
    )
  }
}

export default Animation
