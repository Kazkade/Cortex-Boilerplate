import React from 'react';
import {Router, Switch, Route} from 'react-router';
import { createBrowserHistory } from 'history';
import Logout from './Logout';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const history = createBrowserHistory();
    return( 
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route exact path="/"><p>Home</p></Route>
            <Route path="/logout"><Logout /></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}