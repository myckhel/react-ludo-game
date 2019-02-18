import React, { Component } from 'react'

class House extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className={`house size-6 bg-${this.props.color}`}>
        <div className="r">
        {this.props.seeds.map((seed) => {
          return <div className="col-6 pd-1 center bg-light">{seed}</div>
        })}
        </div>
      </div>
    )
  }
}

export default House
