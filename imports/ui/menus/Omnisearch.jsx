import React from 'react';
import { Segment, Input, Icon } from 'semantic-ui-react';
import ReactHotkeys from 'react-hot-keys';

export default class Omnisearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.style = {
      overlay: {
        background: "rgba(0,0,0,0.35)", 
        position: "absolute", 
        left: 0, right: 0, top: 0, bottom: 0,
        zIndex: 100000,
      }
    }
  }

  open = () => this.setState({open: true});
  close = () => this.setState({open: false});

  render() {
    return(
      <React.Fragment>
        <ReactHotkeys keyName="alt+o" onKeyDown={this.open}/>
        <div onClick={this.close} hidden={!this.state.open} style={this.style.overlay}>
          <div style={{display: "flex", alignItems: 'center', width: "400px", height: "48px"}}>
            <i className="fa fa-search" />
            <div contentEditable={true} onChange={() => console.log("Changing!")} style={{width: "100%", height: "40px"}}>
              Things
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}