import React from 'react'
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'



const title = (
  <h3>My Projects</h3>
);


const MyProjects = () => {

  return(
    <div id="MyProjects">
      <Panel header={title} bsStyle="primary" >
        <ListGroup fill>
          <ListGroupItem href="#link1">Projekt 1</ListGroupItem>
          <ListGroupItem href="#link2">Projekt 2</ListGroupItem>
          <ListGroupItem href="#link3">Projekt 3</ListGroupItem>
          <ListGroupItem href="#link4">Projekt 4</ListGroupItem>
        </ListGroup>
      </Panel>
    </div>
  )

};

export default MyProjects;