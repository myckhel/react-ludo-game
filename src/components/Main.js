import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Board from './Board'
import Profile from './pages/Profile'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div className="App left-64">
    <div className="App-header p-top-30">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/history' component={History}/>
        <Route path='/player/profile' component={Profile}/>
        <Route path='/game' component={Board}/>
      </Switch>
    </div>
  </div>
)

export default Main
