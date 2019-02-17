import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: [],
      won: false,
    }
  }

  componentWillMount = () => {
    this.init()
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount = () => {
      document.removeEventListener("keydown", this.handleKeyPress, false);
   }

  init = () => {
    this.setState({board: this.draw(), choose: false})
  }

  draw = () => {
    let board = []
    return board
  }

  won = () => {
    return ;
  }

  handleClick = (e) => {
    let tile = e.target.innerHTML
    this.move(tile)
  }

  move = (selectedTile) => {

  }

  handleKeyPress = (event) => {
    console.log('emmit');
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {

    return (
      <div className="board">
        Board
      </div>
    );
  }
}

export default Board;
