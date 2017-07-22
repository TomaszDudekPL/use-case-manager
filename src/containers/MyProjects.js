import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button, Modal, FormGroup, FormControl} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import firebase from 'firebase'

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

const firebaseValToArray = val => {
    if (val !== null) {
        const keys = Object.keys(val);
        return keys.map(
            key => ({
                ...val[key],
                key: key
            })
        );
    }
};


class MyProjects extends React.Component {


    state = {
        showModal: false,
        projects: [],
        projectTitle: ''


    };


    componentDidMount() {
        const user = firebase.auth().currentUser;
        firebase.database().ref('Users/' + user.uid + '/Projects/').on('value',
            snapshot => this.setState({
                projects: firebaseValToArray(snapshot.val())
            })
        );

    }

    handleUserProjects = (e) => {
        let clickedElement = e.target;
        let textNodeOfClickedElement = clickedElement.innerHTML;
        let selectedProject = this.state.projects.filter( project => project.title === textNodeOfClickedElement ? project: null);
        if(this.state.projects !== null) {
            this.props.userProjects({
                project: selectedProject[0]
            });
        }

    };

    handleSubmit = () => {
        const user = firebase.auth().currentUser;
        const uniqueKey = firebase.database().ref('Projects').push().key;
        if (user !== null) {
            firebase.database().ref('Users/' + user.uid + '/Projects/' + uniqueKey).set({
                title: this.state.projectTitle,
                owner: user.displayName

            });
            this.close();
        }
    };


    close = () => {
        this.setState({showModal: false});
    };

    open = () => {
        this.setState({showModal: true});
    };

    render() {
        // console.log(this.state.projects);
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
                                    <FormControl type="text" placeholder="Title"
                                                 onChange={e => this.setState({projectTitle: e.target.value})}/>
                                </FormGroup>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleSubmit} bsStyle="success"
                                    block>{createNewProject_label}</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <Panel header={panelTitle} bsStyle="primary">
                    <ListGroup fill>
                        {
                            this.state.projects ? this.state.projects.map(project => (
                                <LinkContainer to={'/protected/' + project.key} key={project.key}>
                                    <ListGroupItem onClick={this.handleUserProjects}>{project.title}</ListGroupItem>
                                </LinkContainer>
                            )) : null

                        }
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        userProjects: data => dispatch({type: 'USERPROJECT', data})
    }
};

export default withRouter(connect(null, mapDispatchToProps)(MyProjects))


