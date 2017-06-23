import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap'


const title = (
  <h3>Registered Users</h3>
);

export default class RegisteredUsers extends React.Component {



  render() {
    return (
      <div id="RegisteredUsers">
        <Panel header={title} bsStyle="danger">
          <ListGroup fill className="list-group">
            <ListGroupItem href="#link1" className="flex flx-space-between block" >Tomasz Dudek
              <Button bsStyle="success" bsSize="xsmall" className="block-btn">{this.props.label}</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between block" >Maciej Wasilewski
              <Button bsStyle="success" bsSize="xsmall" className="block-btn">{this.props.label}</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between block"  >Robert Poniewierski
              <Button bsStyle="success" bsSize="xsmall" className="block-btn">{this.props.label}</Button>
            </ListGroupItem>

            <ListGroupItem href="#link1" className="flex flx-space-between block" >Krzysiek Rybiński
              <Button bsStyle="success" bsSize="xsmall" className="block-btn">{this.props.label}</Button>
            </ListGroupItem>

          </ListGroup>
        </Panel>
      </div>
    )
  }
};

