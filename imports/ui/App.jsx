import React from 'react';
import { Meteor } from 'meteor/meteor';
import { MobileView, BrowserView, isMobile, isBrowser } from 'react-device-detect';
import { Grid, Menu, Image, Divider } from 'semantic-ui-react';

import AppMenu from './menus/AppMenu';
import Omnisearch from './menus/Omnisearch';
import Login from './Login';
import Routes from './Routes';
import SideBarMenu from './menus/SideBarMenu';

/**
 * Variables
 */

SIDEBAR_WIDTH = "240px";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }

    this.style = {
      sideMenu: {
        width: (isBrowser) ? SIDEBAR_WIDTH : 0,
        position: "absolute",
        left: 0, right: 0, bottom: 0, top: 0
      },
      content: {
        marginLeft: (isBrowser) ? SIDEBAR_WIDTH: 0, 
        height: "100%",
      },
      sideBarImage: {
        marginTop: "16px",
        display: "block", 
        marginLeft: "auto", 
        marginRight: "auto", 
        marginBottom: "16px"
      }
    }

  }

  render() {
    const { activeItem } = this.state

    if(!Meteor.userId()) {
      return <Login />
    } else {
      return(
        <React.Fragment>
          <Omnisearch />
          <Menu attached vertical style={this.style.sideMenu}>
            <Image src="/placeholder.png" width="90%" style={this.style.sideBarImage}/>
            <SideBarMenu />
          </Menu>
          <div style={this.style.content}>
            <AppMenu />
            <Routes />
          </div>
        </React.Fragment>
      )
    }
  }
}
