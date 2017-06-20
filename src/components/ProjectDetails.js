import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, ButtonGroup} from 'react-bootstrap'

const title1 = (
  <h3>Project name:</h3>
);
const title2 = (
  <h3>Owner</h3>
);
const title3 = (
  <h3>Users</h3>
);

const ProjectsDetails = () => {

  return(
    <div id="ProjectsDetails">
      <Panel header={title1} bsStyle="primary" defaultExpanded>
        <Panel header={title2} bsStyle="info" collapsible defaultExpanded >
        <ListGroup fill>
        <ListGroupItem href="#link1">Owner: Tomasz Dudek</ListGroupItem>
        </ListGroup>
        </Panel>
        <Panel header={title3} bsStyle="info" collapsible defaultExpanded>
        <ListGroup fill>
          <ListGroupItem href="#link1" className="flex flx-space-between">User1
            <Button bsStyle="danger" bsSize="xsmall" className="hide" >Remove User</Button>
            <Button bsStyle="success" bsSize="xsmall">Add new List</Button>
          </ListGroupItem>
          <ListGroupItem href="#link2">User2</ListGroupItem>
          <ListGroupItem href="#link3">User3</ListGroupItem>
          <ListGroupItem href="#link4">User4</ListGroupItem>
        </ListGroup>
        </Panel>
      </Panel>
    </div>
  )

};

export default ProjectsDetails;

