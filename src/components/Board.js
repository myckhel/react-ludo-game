import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      level: props.level,
      board: [],
      won: false,
    }
  }

  DIM_MAX = 9; DIM_MIN = 3;
  // properties
  tile_r; tile_c; blank_r; blank_c;
// sound
// sndClick = new Howl({ src: ['snd/click.mp3'] });

  componentWillMount = () => {
    if (this.state.level < this.DIM_MIN || this.d > this.DIM_MAX) {
      // print board must be between DIM_MIN * DIM_MIN and DIM_MAX * DIM_MAX
      return false
    }
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
    let b_size = this.state.level * this.state.level - 1
    for (let i = 0; i < this.state.level; i++) {
      board[i] = []
      for (let j = 0; j < this.state.level; j++) {
        board[i][j] = b_size--
      }
    }

    if (this.state.level % 2 === 0) {
        board[this.state.level - 1][this.state.level - 2] = 2
        board[this.state.level - 1][this.state.level - 3] = 1
    }

    return board
  }

  won = () => {
    let checked = false
    let incr = 1

    for (let i = 0; i < this.state.level; i++) {
      for (let j = 0; j < this.state.level; j++) {
        // check if current tile is 0 and tile is at the end of the board
        if (((i + 1) * (j + 1) === (this.state.level * this.state.level)) && this.state.board[i][j] === 0) {
          incr = 0
        }

        if (this.state.board[i][j] !== incr) {
          checked = false
          return false
        } else {
          checked = true
        }
        incr++
      }
    }
    return checked
  }

  handleClick = (e) => {
    let tile = e.target.innerHTML
    this.move(tile)
  }

  move = (selectedTile) => {
    selectedTile = parseInt(selectedTile)
    for (let i = 0; i < this.state.level; i++) {
      for (let j = 0; j < this.state.level; j++) {
        if (this.state.board[i][j] === selectedTile) {
          this.tile_r = i
          this.tile_c = j
          break
        }
      }
    }

    for (let i = 0; i < this.state.level; i++) {
      for (let j = 0; j < this.state.level; j++) {
        if (this.state.board[i][j] === 0) {
          this.blank_r = i
          this.blank_c = j
          break
        }
      }
    }

    let legal = false;
    let up_r = this.blank_r - 1;
    let up_c = this.blank_c;
    let down_r = this.blank_r + 1;
    let down_c = this.blank_c;
    let left_r = this.blank_r;
    let left_c = this.blank_c - 1;
    let right_r = this.blank_r;
    let right_c = this.blank_c + 1;
    let tile = this.state.board[this.tile_r][this.tile_c];

    try {
      if(tile === this.state.board[up_r][up_c]){
        legal = true;
      }
    } catch (e) {}


    try {
      if(tile === this.state.board[down_r][down_c]){
        legal = true;
      }
    } catch (e) {}


    try {
      if(tile === this.state.board[left_r][left_c]){
        legal = true;
      }
    } catch (e) {}

    try {
      if(tile === this.state.board[right_r][right_c]){
        legal = true;
      }
    } catch (e) {}

    // this.swap();
    if(legal) {
      this.swap();
      return true;
    } else {
        return false;
    }
  }

  swap = () => {
    // this.sndClick.play();
    let temp = this.state.board[this.tile_r][this.tile_c]
    this.setState( state => {
      state.board[this.tile_r][this.tile_c] = state.board[this.blank_r][this.blank_c]
      return {board: state.board}
    })
    this.setState( state => {
      state.board[this.blank_r][this.blank_c] = temp;
      return {board: state.board}
    })

    if (this.won()) {
      this.setState({
        won: true
      })
    }
  }

  handleKeyPress = (event) => {
    console.log('emmit');
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  Tile = (props) => (
    <div
      value={props.num}
      onClick={this.handleClick}
      className={`tile border border-dark col btn btn-${props.num === 0 ? 'dark' : 'warning'}`}
    >{props.num === 0 ? "__" : props.num}</div>
  )

  Menu = () => (
    <div className="row align-item-center">
      <div className="col-xs-4 pull-left">
        <button className="btn border border-dark" onClick={this.init} ><h3> Restart Level <i className="restart"></i> </h3></button>
      </div>
      <div className="col-xs-4 pull-right">
        <button className="btn border border-dark" onClick={this.props.clicks.handleReset} ><h3> Restart Game <i className="reset"></i> </h3></button>
      </div>
    </div>
  )

  render() {
    let tiles = this.state.board.map((row, i) => {
      return row.map((col, j) => {
        return <this.Tile num={col} key={i+j} />
      })
    })
    tiles = tiles.map((v, i) => {
      return <div className="row" key={i}>{v}</div>
    })

    return (
      <div className="board">
        {this.state.won ?
        <h1>Congratulations You Won!!!</h1>
        : tiles
        }
        <this.Menu />
      </div>
    );
  }
}

export default Board;
