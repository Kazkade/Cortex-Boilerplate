import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Card } from 'semantic-ui-react';

export default class Logout extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      timer: 5
    }

    this.styles = {
      view: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      },
      card: {
        boxShadow: "0 0 20px 10px rgba(50,50,50,0.25)"
      }
    }

    Meteor.logout();
    Meteor.setInterval(() => {
      console.log("Interval working");
      if(this.state.timer === 0) {
        window.location = "/"
      } else {
        this.setState({timer: this.state.timer - 1});
      }
    }, 1000)
  }

  render() {
    Meteor.logout();
    return(
      <React.Fragment>
        <div style={this.styles.view}>
          <Card style={this.styles.card}>
            <Card.Content header="You've been logged out!" />
            <Card.Content>
              <p>You will be redirected in {this.state.timer} second{(this.state.timer === 1) ? <span></span> : <span>s</span>}.</p>
            </Card.Content>
            <Card.Content>
              <p>or <a href="/">redirect now</a>.</p>
            </Card.Content>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}