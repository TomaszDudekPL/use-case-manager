import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, Label, Modal, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import classNames from 'classnames'

const title1 = (
  <h3>Use Case List-Title</h3>
);

const modalTitle = (
  <span>Add Details of New Case</span>
);

const createNewProject_label = (
  <span>Create New Case</span>
);

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class UseCaseList extends React.Component {

  state = {
    toggleOnDone: false,
    toggleOnNotDone: true,
    showModal: false
  };

  onToggleClick = () => {
    this.setState({
      toggleOnDone: !this.state.toggleOnDone,
      toggleOnNotDone: this.state.toggleOnNotDone
    })
  };

  close = () => {
    this.setState({showModal: false});
  };

  open = () => {
    this.setState({showModal: true});
  };

  render() {

    const toggleDoneClass = classNames({
      'toggleDone-off': this.state.toggleOnDone === false,
      'toggleDone-on': this.state.toggleOnDone
    });
    const toggleNotDoneClass = classNames({
      'toggleNotDone-off': this.state.toggleOnDone,
      'toggleNotDone-on': this.state.toggleOnDone === false
    });

    return (
      <div id="UseCaseList">

        <div>
          <Modal show={this.state.showModal} onHide={this.close} className="top-150">
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <form>

                <FormGroup className="pdn10">
                  <ControlLabel>Title</ControlLabel>
                  <FormControl type="text" placeholder="Title"/>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea" className="pdn10">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Description of case" />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea" className="pdn10">
                  <ControlLabel>Actions</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Actions to do" />
                </FormGroup>

                <FormGroup className="pdn10">
                <FieldGroup
                  id="formControlsFile"
                  type="file"
                  label="File you want to add"
                  help="Use image for this case"
                />
                </FormGroup>

              </form>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} bsStyle="success" block>{createNewProject_label}</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Panel header={title1} bsStyle="warning" collapsible>
          <Button bsStyle="success" block onClick={this.open}>+Add New Case</Button>
          <ListGroup fill>
            <ListGroupItem href="#link1" className="flex flx-space-between">Case1
              <Label bsStyle="success" className={`${toggleDoneClass}`} onClick={this.onToggleClick}>DONE!</Label>
              <Label bsStyle="danger" className={`${toggleNotDoneClass}`}  onClick={this.onToggleClick}>NOT DONE</Label>
            </ListGroupItem>
            <ListGroupItem href="#link2">Case2</ListGroupItem>
            <ListGroupItem href="#link3">Case3</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default UseCaseList;