import React from "react"

// Libraries
import Lottie from "react-lottie"

export default props => {
  const options = {
    loop: props.loop ? props.loop : false,
    autoplay: props.autoplay ? props.autoplay : false,
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie options={options} isClickToPauseDisabled={true} />
}
