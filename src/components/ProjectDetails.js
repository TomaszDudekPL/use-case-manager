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
            <ListGroupItem href="#link1" className="flex flx-space-between block">User1
              <ButtonGroup bsSize="xsmall">
              <Button bsStyle="danger"  className="block-btn" >Remove User</Button>
              <Button bsStyle="success" className="block-btn">Add new List</Button>
              </ButtonGroup>
            </ListGroupItem>
            <ListGroupItem href="#link2" className="flex flx-space-between block">User2
              <ButtonGroup bsSize="xsmall">
                <Button bsStyle="danger"  className="block-btn" >Remove User</Button>
                <Button bsStyle="success" className="block-btn">Add new List</Button>
              </ButtonGroup>
            </ListGroupItem>
            <ListGroupItem href="#link3" className="flex flx-space-between block">User3
              <ButtonGroup bsSize="xsmall">
                <Button bsStyle="danger"  className="block-btn" >Remove User</Button>
                <Button bsStyle="success" className="block-btn">Add new List</Button>
              </ButtonGroup>
            </ListGroupItem>
            <ListGroupItem href="#link4" className="flex flx-space-between block">User4
              <ButtonGroup bsSize="xsmall">
                <Button bsStyle="danger"  className="block-btn" >Remove User</Button>
                <Button bsStyle="success" className="block-btn">Add new List</Button>
              </ButtonGroup>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </Panel>
    </div>
  )
};

export default ProjectsDetails;

