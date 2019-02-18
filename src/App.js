import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
// import AppMenu from './components/AppMenu'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentWillMount = () => {

  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
