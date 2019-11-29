import React from 'react';
import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { Menu, Input } from 'semantic-ui-react';

export default class AppMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: ''
    }
  }

  componentDidMount() {
    let url = window.location.pathname.split('/')[1];
    this.setState({activeItem: url});
  }

  render() {
    const { activeItem } = this.state

    return(
      <React.Fragment>
        <Menu pointing secondary style={{position:"sticky"}}>
          <Menu.Item
            name="home"
            active={activeItem === ''}
            onClick={(e) => window.location="/"}
          />
          <Menu.Item
            name="help"
            position="right"
            active={activeItem === 'help'}
            onClick={(e) => window.location = '/help'}
            />
          <Menu.Item 
            name="admin" 
            active={activeItem === 'admin'} 
            onClick={(e) => window.location="/admin"} 
            hidden={false}
          />
          <Menu.Item 
            name="system" 
            active={activeItem === 'system'} 
            onClick={(e) => window.location="/system"} 
            hidden={false}
          />
          <Menu.Item
            name="account"
            active={activeItem === 'account'}
            onClick={(e) => window.location = '/account'}
          />
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={(e) => window.location = '/logout'}
          />
        </Menu>
      </React.Fragment>
    )
  }
}