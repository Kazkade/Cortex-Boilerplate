import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Form, Button, Message, Icon } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      message: null,
      username: "",
      password: "",
      loggingIn: false,
    }

    this.styles = {
      view: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "url(/login/login_back.jpg)",
        backgroundPosition: 'center center',
        backgroundSize: 'auto',
        backgroundRepeat: "no-repeat"
      },
      card: {
        boxShadow: "0 0 20px 10px rgba(50,50,50,0.75)"
      }
    }
  }

  updateUsername = (e) => {this.setState({username: e.target.value})}
  updatePassword = (e) => {this.setState({password: e.target.value})}
  submit = (e) => {
    e.preventDefault();
    this.setState({loggingIn: true})
    Meteor.loginWithPassword(this.state.username, this.state.password, (result) => {
      if(result != undefined && result.error == 400) {
        this.setState({message: result.reason});
        this.setState({loggingIn: false});
      }
      if(Meteor.user() != null){
        window.location.reload(true);
      }
    })
  }

  render() {
    console.log(this.state.loggingIn);
    return(
      <React.Fragment>
        <div style={this.styles.view}>
          <Card style={this.styles.card}>
            <Image src="placeholder.png" style={{background: "none", margin: "16px"}} />
            <Card.Content hidden={(this.state.message == "" || this.state.message == null) ? true : false}>
              <Message
                error
                header="Oops!"
                content={this.state.message}
              />
            </Card.Content>
            <Card.Content hidden={this.state.loggingIn}>
              <Form onSubmit={this.submit}>
                <Form.Input label="Username" onChange={this.updateUsername} />
                <Form.Input label="Password" type="password" onChange={this.updatePassword} />
                <Button type="submit" fluid>Log In</Button>
              </Form>
            </Card.Content>
            <Card.Content hidden={!this.state.loggingIn}>
              <center>
                <Icon loading name="lab" size="large" />
              </center>
            </Card.Content>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}