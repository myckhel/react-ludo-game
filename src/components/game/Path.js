import React, { Component } from 'react'

class Path extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className={`path size-1 bg-${this.props.color}`}>
        {this.props.seed}
      </div>
    )
  }
}

export default Path
