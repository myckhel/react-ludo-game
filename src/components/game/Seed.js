import React, { Component } from 'react'

class Seed extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className={`seed size-0 bg-${this.props.color}`}>
      </div>
    )
  }
}

export default Seed
