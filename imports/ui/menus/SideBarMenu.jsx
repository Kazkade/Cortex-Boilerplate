import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class SideBarMenu extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Menu.Item name="dashboard" onClick={() => {window.location = '/dashboard'}} />
      </React.Fragment>
    )
  }
}