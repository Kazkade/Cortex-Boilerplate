import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import 'semantic-ui-css/semantic.css';
import Login from '../imports/ui/Login';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
