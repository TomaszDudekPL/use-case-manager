import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap'



const title = (
  <h3>Registered Users</h3>
);





const RegisteredUsers = () => {

  return(
    <div id="RegisteredUsers">
      <Panel header={title} bsStyle="danger" >
        <ListGroup fill className="list-group" >
          <ListGroupItem href="#link1" className="flex flx-space-between">Tomasz Dudek<Button bsStyle="success" bsSize="xsmall">Add to this project</Button></ListGroupItem>
          <ListGroupItem href="#link2" className="flex flx-space-between">Maciej Wasilewski<Button bsStyle="success" bsSize="xsmall">Add to this project</Button></ListGroupItem>
          <ListGroupItem href="#link3" className="flex flx-space-between">Robert Poniewierski<Button bsStyle="success" bsSize="xsmall">Add to this project</Button></ListGroupItem>
          <ListGroupItem href="#link4" className="flex flx-space-between">Krzysiek Zawadzki<Button bsStyle="success" bsSize="xsmall">Add to this project</Button></ListGroupItem>
        </ListGroup>
      </Panel>
    </div>
  )

};

export default RegisteredUsers;