import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, Modal, FormGroup, FormControl} from 'react-bootstrap'


const panelTitle = (
  <h3>My Projects</h3>
);

const modalTitle = (
  <span>Add Title to this Project</span>
);

const createNewProject_label = (
  <span>Create New Project</span>
);

const addNewProject_label = (
  <span>+Add New Project</span>
);

class MyProjects extends React.Component {


  state = {
    showModal: false
  };

  close = () => {
    this.setState({showModal: false});
  };

  open = () => {
    this.setState({showModal: true});
  };

  render() {

    return (
      <div id="MyProjects">
        <Button
          bsStyle="success"
          className="margin10-bottom"
          onClick={this.open}
          block
        >{addNewProject_label}
        </Button>

        <div>
          <Modal show={this.state.showModal} onHide={this.close} className="top-300">
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup bsSize="large">
                  <FormControl type="text" placeholder="Title"/>
                </FormGroup>
              </form>
              <h5 className="mylabel">Project Name: xxxxxxxx</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} bsStyle="success" block>{createNewProject_label}</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Panel header={panelTitle} bsStyle="primary">
          <ListGroup fill>
            <ListGroupItem href="#link1">Projekt 1</ListGroupItem>
            <ListGroupItem href="#link2">Projekt 2</ListGroupItem>
            <ListGroupItem href="#link3">Projekt 3</ListGroupItem>
            <ListGroupItem href="#link4">Projekt 4</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default MyProjects;