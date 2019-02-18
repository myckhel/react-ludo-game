import React, { Component } from 'react'
import Die from './Die'

class CenterLudo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    let dies = [<Die num={3} />, <Die num={3} />]
    return (
      <div className="center-ludo size-3 bg-warning">
      {dies}
      </div>
    )
  }
}

export default CenterLudo
