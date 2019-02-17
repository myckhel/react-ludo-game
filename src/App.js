import React, { Component, Fragment } from 'react';
import Board from './components/Board'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greet: true,
      choose: false,
      level: 3
    }
  }

  componentWillMount = () => {

  }

  Greet = () => {
    return (
      <Fragment>
        <h1>Welcome To Game Of Fifteen</h1>
        <button className="btn" onClick={this.handleProceed} ><h3> Proceed </h3></button>
      </Fragment>
    )
  }

  Choose = () => (
    <Fragment>
      <h1 className="">Choose Difficulty</h1>
      <div className="form-group">
        <div className="col-md-12">
          <select onChange={this.handleLevel} name="level" className="col-xs-6 col-sm-4 col-md-6 col-lg-9" data-style="btn-success" required>
            <option value="3">Easy</option>
            <option value="4">Normal</option>
            <option value="5">hard</option>
            <option value="6">Professional</option>
            <option value="7">Worldclass</option>
            <option value="8">Nightmare</option>
            <option value="9">Hell</option>
          </select>
          <button className="btn" onClick={this.handleChoose} ><h3> Choose </h3></button>
        </div>
      </div>
    </Fragment>
  )

  handleLevel = (e) => {
    let level = parseInt(e.target.value)
    this.setState({level})
  }

  handleChoose = () => {
    this.setState({choose: false})
  }

  handleProceed = () => {
    this.setState({
      greet: false,
      choose: true
    })
  }

  handleReset = () => {
    this.setState({
      choose: true,
      level: 3
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.greet ? <this.Greet />
          : this.state.choose ? <this.Choose />
          : <Board
              level={this.state.level}
              clicks={{
                handleRestart: this.handleChoose,
                handleReset: this.handleReset
              }}
            />
          }
        </header>
      </div>
    );
  }
}

export default App;
