import React from 'react'
import {Panel, ButtonToolbar, Button, ListGroup, ListGroupItem} from 'react-bootstrap'



const title = (
  <h3>Panel title</h3>
);

export const panelsInstance = (
  <div>
    <Panel header={title} bsStyle="primary" collapsible defaultExpanded>
      Panel content
    </Panel>
  </div>
);

export const buttonsInstance = (
  <ButtonToolbar>
    <Button bsStyle="primary">Primary</Button>
  </ButtonToolbar>
);

export const listgroupInstance = (
  <ListGroup>
    <ListGroupItem href="#link1">Link 1</ListGroupItem>
    <ListGroupItem href="#link2">Link 2</ListGroupItem>
    <ListGroupItem onClick={alertClicked}>
      Trigger an alert
    </ListGroupItem>
  </ListGroup>
);

