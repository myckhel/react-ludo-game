import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Device from './pages/Device'
import RootComponent from './pages/RootComponent'
// import { BrowserRouter } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideMenu extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

 render () {
   return (
     <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
              <SideNav
                  onSelect={(selected) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                          history.push(to);
                      }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                      <NavItem eventKey="home">
                          <NavIcon>
                              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Home
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="devices">
                          <NavIcon>
                              <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Devices
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
              <main>
                  <Route path="/" exact component={props => <RootComponent />} />
                  <Route path="/home" component={props => <Home />} />
                  <Route path="/devices" component={props => <Device />} />
              </main>
          </React.Fragment>
      )}
      />
    </Router>
    )
 }
}

export default SideMenu;
