import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';
import Seed from './game/Seed'
import Path from './game/Path'
import House from './game/House'
import CenterLudo from './game/CenterLudo'
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
    const seeder = (num, color) => {
      let seeds = []
      for (let i = 0; i < num; i++) {
        seeds[i] = <Seed color={color} />
      }
      return seeds
    }
    let pHouse = (seeds, color) => (
      <div className="c">
        <House seeds={seeds} color={color} />
      </div>
    )

    let printPaths = (col, row, pathMeta) => {
      let cols = []
        for (let i = 0; i < row; i++) {
          let row = []
          for (let ii = 0; ii < col; ii++) {
            row[ii] = <Path seed={[]}
                color={ ((pathMeta) => {
                  console.log(pathMeta.position);
                    if (pathMeta.position === 'left' && ((i === 0 && ii === 1) || (i === 1 && ii > 0)) ) {
                      return 'primary'
                    }

                    if (pathMeta.position === 'right' && ((i === 2 && ii === 4) || (i === 1 && ii >= 0 && ii < 5))) {
                      return 'success'
                    }

                    if (pathMeta.position === 'top' && ((i === 1 && ii === 2) || (i > 0 && ii === 1)) ) {
                      return 'warning'
                    }

                    if (pathMeta.position === 'buttom' && ((i === 4 && ii === 0) || (ii === 1) && i >= 0 && i < 5) ) {
                      return 'danger'
                    }
                    return 'light'
                  })(pathMeta)
                }
              />
          }
          cols[i] = row
        }

        cols = cols.map((r) => (
          <div className="r">
            {r}
          </div>
        ))
      return cols
    }

    let printHalf = (seeds) => (
      <div className="r">
        <div className="c">
          {pHouse(seeds)}
        </div>
        <div className="c">
          {printPaths(3, 6)}
        </div>
        <div className="c">
          {pHouse(seeds)}
        </div>
      </div>
    )

    let side = (colorTop, colorButtom, position) => (
      <div className="c-5">
        <div className="r">
          {pHouse(seeder(4, colorTop), colorTop)}
        </div>
        <div className="r">
          {printPaths(6, 3, {position, color: colorTop} )}
        </div>
        <div className="r">
          {pHouse(seeder(4, colorButtom), colorButtom)}
        </div>
      </div>
    )

    let middle = () => (
      <div className="c-2">
        <div className="r">
          {printPaths(3, 6, {position: 'top', color: 'success'})}
        </div>
        <div className="r">
          <CenterLudo />
        </div>
        <div className="r">
          {printPaths(3, 6, {position: 'buttom', color: 'danger'})}
        </div>
      </div>
    )

    return (
      <div className="r board">
          {side('primary', 'danger', 'left')}
          {middle()}
          {side('warning', 'success', 'right')}
      </div>
    );
  }
}

export default Board;
// <Path seed={<Seed />} />
// <div className="col-md-12 board">
//   {printHalf(seeds)}
//   <div className="r">
//     <div className="c">
//       {printPaths(6, 3)}
//     </div>
//     <div className="c">
//       <CenterLudo />
//     </div>
//     <div className="c">
//       {printPaths(6, 3)}
//     </div>
//   </div>
//   {printHalf(seeds)}
// </div>
