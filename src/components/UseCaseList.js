import React from 'react'
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'

const title1 = (
  <h3>Use Case List-Title</h3>
);

const UseCaseList = () => {

  return(
    <div id="UseCaseList">
      <Panel header={title1} bsStyle="primary" collapsible>
          <ListGroup fill>
            <ListGroupItem href="#link1">Case1</ListGroupItem>
            <ListGroupItem href="#link2">Case2</ListGroupItem>
            <ListGroupItem href="#link3">Case3</ListGroupItem>
          </ListGroup>
        </Panel>
    </div>
  )

};

export default UseCaseList;