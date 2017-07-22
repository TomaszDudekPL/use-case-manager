import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, ButtonGroup, Modal, FormGroup, FormControl} from 'react-bootstrap'
import UseCaseList from '../components/UseCaseList'
import firebase from 'firebase'
import {connect} from 'react-redux';

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


    state = {
        showModal: false,
        projectTitle: '',
        projectOwner: '',

    };



    close = () => {
        this.setState({showModal: false});
    };

    open = () => {
        this.setState({showModal: true});
    };


    render() {

        return (

            <div id="ProjectsDetails">
                <div>
                    <Modal show={this.state.showModal} onHide={this.close} className="top-300">
                        <Modal.Header closeButton>
                            <Modal.Title>Add Title of new Use Case List</Modal.Title>
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
                            <Button onClick={this.close} bsStyle="success" block>Create Use Case List</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <Panel header={this.props.project ? this.props.project.title: '' || 'Title of Project' } bsStyle="primary" defaultExpanded>
                    <Panel header={title2} bsStyle="success" collapsible defaultExpanded>
                        <ListGroup fill>
                            <ListGroupItem href="#link1">{this.props.project ? this.props.project.owner: '' || 'Owner'}</ListGroupItem>
                        </ListGroup>
                    </Panel>
                    <Panel header={title3} bsStyle="success" collapsible defaultExpanded>
                        <ListGroup fill>
                            <ListGroupItem href="#link1" className="flex flx-space-between block">{this.props.project && this.props.project.users ? this.props.project.users.map(user=>user.username): null || 'add contributors if you need...'}
                                <ButtonGroup bsSize="xsmall">
                                    <Button bsStyle="danger" className="block-btn">Remove User</Button>
                                    <Button bsStyle="success" className="block-btn" onClick={this.open}>+Add new
                                        List</Button>
                                </ButtonGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <UseCaseList />

                </Panel>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    if(state.userProjectReducer.data) {

        return {
            project: state.userProjectReducer.data.project

        }
    }
};


export default connect(mapStateToProps, null)(ProjectDetails);




