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

    handleRemoveUser = (e) => {

        let nameOfClickedUser = e.target.value;
        const user = firebase.auth().currentUser;
        firebase.database().ref('Users/' + user.uid + '/Projects/' + this.props.project.key + '/users/').on('value', snapshot => {

                const usersObject = snapshot.val();

                if (usersObject) {
                    let arrayOfAllUsernames = usersObject.map(user => user.username);
                    let index = arrayOfAllUsernames.indexOf(nameOfClickedUser);
                    let userId = usersObject[index].userId;

                    firebase.database().ref('Users/' + user.uid + '/Projects/' + this.props.project.key + '/users/' + [index]).remove();
                    firebase.database().ref('Users/' + userId + '/Projects/' + this.props.project.key ).remove()

                }
            }
        );


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
                            { this.props.project ?
                            <h5 className="mylabel">Project title: {this.props.project.title}</h5>: null
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close} bsStyle="success" block>Create Use Case List</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <Panel header={this.props.project ? this.props.project.title : '' || 'Title of Project'}
                       bsStyle="primary" defaultExpanded>
                    <Panel header={title2} bsStyle="success" collapsible defaultExpanded>
                        <ListGroup fill>
                            <ListGroupItem
                                href="#link1">{this.props.project ? this.props.project.owner : '' || 'Owner'}</ListGroupItem>
                        </ListGroup>
                    </Panel>
                    <Panel header={title3} bsStyle="success" collapsible defaultExpanded>
                        <ListGroup fill className="red">
                            {
                                this.props.project && this.props.project.users ?
                                    this.props.project.users.map(user =>
                                        (<ListGroupItem href="#link1"
                                                        className="flex flx-space-between block"
                                                        key={this.props.project.key}
                                        >{user.username}
                                            <ButtonGroup bsSize="xsmall">
                                                <Button bsStyle="danger" className="block-btn"
                                                        onClick={this.handleRemoveUser}
                                                        value={user.username}
                                                >Remove User from this
                                                    project</Button>
                                            </ButtonGroup>
                                        </ListGroupItem>)) : null || 'no contributors...,add them if you need...'}

                        </ListGroup>
                    </Panel>

                    <Button block bsStyle="success" className="block-btn margin10-bottom" onClick={this.open}>+Add new
                        List</Button>

                    <UseCaseList/>

                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    if (state.userProjectReducer.data) {

        return {
            project: state.userProjectReducer.data.project

        }
    }
};


export default connect(mapStateToProps, null)(ProjectDetails);




