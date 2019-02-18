import React, { Component } from 'react'

class Die extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    let points = []
    for (let i = 0; i < this.props.num; i++) {
      points[i] = <div className="point c"></div>
    }
    return (
      <div className={`die size-1 bg-light center`}>
        {points}
      </div>
    )
  }
}

export default Die
