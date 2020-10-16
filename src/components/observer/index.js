import React from "react"

class Observer extends React.Component {
  ref = React.createRef()

  componentDidMount = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          this.props.onVisible()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: this.props.threshold,
      }
    )

    if (this.ref.current) {
      observer.observe(this.ref.current)
    }
  }

  render = props => <div ref={this.ref}>{this.props.children}</div>
}

export default Observer
