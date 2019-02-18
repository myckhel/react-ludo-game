import React from 'react'
import { Route } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <React.Fragment>
  <Route render={({ location, history }) => (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
          const to = '/' + selected;
          console.log(to);
          if (location.pathname !== to) {
              history.push(to);
          }
        }
      }
      >
      <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="game">
                <NavIcon>
                    <i className="fa fa-fw fa-gamepad" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Game
                </NavText>
            </NavItem>
            <NavItem eventKey="history">
              <NavIcon>
                  <i className="fa fa-fw fa-history" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  History
              </NavText>
            </NavItem>
            <NavItem eventKey="player">
              <NavIcon>
                  <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  User
              </NavText>
              <NavItem eventKey="player/profile">
                <NavText>
                    <i className="fa fa-fw fa-user-circle-o" style={{ fontSize: '1.75em' }} /> Profile
                </NavText>
              </NavItem>
              <NavItem eventKey="player/logout">
                <NavText>
                    <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} /> Logout
                </NavText>
              </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  )}
  />
  </React.Fragment>
)

export default Header
// <header>
//   <nav>
//     <ul>
//       <li><Link to='/'>Root</Link></li>
//       <li><Link to='/home'>Home</Link></li>
//       <li><Link to='/devices'>Device</Link></li>
//     </ul>
//   </nav>
// </header>
