import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import classNames from 'classnames'

const title = (
  <h3>Registered Users</h3>
);


export default class RegisteredUsers extends React.Component {

  state ={
    toggleOn: false
  };

  changeOnTrue=()=>{
    this.setState({
      toggleOn: true
    })
  };
  changeOnFalse= ()=>{
    this.setState({
    toggleOn: false
  })
  };
  render() {

    const toggleClass = classNames({
      'hide': this.state.toggleOn === false,
      '': this.state.toggleOn
    });

    return (
      <div id="RegisteredUsers">
        <Panel header={title} bsStyle="danger">
          <ListGroup fill className="list-group">
            <ListGroupItem href="#link1" className="flex flx-space-between" onMouseOver={this.changeOnTrue} onMouseOut={this.changeOnFalse}>Tomasz Dudek
              <Button bsStyle="success" bsSize="xsmall" className={`${toggleClass}`}>Add to this project</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between" onMouseOver={this.changeOnTrue} onMouseOut={this.changeOnFalse}>Maciej Wasilewski
              <Button bsStyle="success" bsSize="xsmall" className={`${toggleClass}`}>Add to this project</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between" onMouseOver={this.changeOnTrue} onMouseOut={this.changeOnFalse}>Robert Poniewierski
              <Button bsStyle="success" bsSize="xsmall" className={`${toggleClass}`}>Add to this project</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between" onMouseOver={this.changeOnTrue} onMouseOut={this.changeOnFalse}>Krzysiek Rybiński
              <Button bsStyle="success" bsSize="xsmall" className={`${toggleClass}`}>Add to this project</Button>
            </ListGroupItem>

          </ListGroup>
        </Panel>
      </div>
    )
  }
};

