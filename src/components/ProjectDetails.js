import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, ButtonGroup} from 'react-bootstrap'
import {connect} from 'react-redux'


const title1 = (
  <h3>Project name:</h3>
);
const title2 = (
  <h3>Owner</h3>
);
const title3 = (
  <h3>Users</h3>
);

class ProjectDetails extends React.Component {


  render() {

    return (
      <div id="ProjectsDetails">
        <Panel header={title1} bsStyle="primary" defaultExpanded>
          <Panel header={title2} bsStyle="info" collapsible defaultExpanded>
            <ListGroup fill>
              <ListGroupItem href="#link1">Owner: Tomasz Dudek</ListGroupItem>
            </ListGroup>
          </Panel>
          <Panel header={title3} bsStyle="info" collapsible defaultExpanded>
            <ListGroup fill>
              <ListGroupItem href="#link1" className="flex flx-space-between block">User1
                <ButtonGroup bsSize="xsmall">
                  <Button bsStyle="danger" className="block-btn">Remove User</Button>
                  <Button bsStyle="success" className="block-btn" onClick={this.props.showModalToAddNewList}>Add new List</Button>
                </ButtonGroup>
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </Panel>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModalToAddNewList: () => dispatch({type: 'OPEN_MODAL'})
  };

};

export default connect(null, mapDispatchToProps)(ProjectDetails);


