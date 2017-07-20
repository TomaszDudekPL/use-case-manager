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

    // componentDidMount() {
    //     firebase.database().ref('Users').on(
    //         'value',
    //         snapshot => this.setState({
    //             projects: firebaseValToArray(snapshot.val())
    //
    //         })
    //
    //     )
    //
    // }
    componentDidMount() {
        const user = firebase.auth().currentUser;
        firebase.database().ref('Users/' + user.uid + '/Projects/').on('value',
            snapshot => this.setState({
                projects: firebaseValToArray(snapshot.val())
            })
        );

    }

    handleUserProjects = (e) => {
        let titleOfClickedProject = e.target;
        console.log(titleOfClickedProject);
        let text = titleOfClickedProject.firstChild;
        console.log(text);
        let proj = this.state.projects.filter( project => project.title === text ? project : null);
        console.log('to jest proj:',proj);
        // if(this.state.projects) {
        //     this.props.userProjects({
        //         project: proj
        //     });
        // }

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
        console.log(this.state.projects);
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
                            <h5 className="mylabel">Project Name: xxxxxxxx</h5>
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
                                    <ListGroupItem onClick={this.handleUserProjects} id={project.key}>{project.title}</ListGroupItem>
                                </LinkContainer>
                            )) : null

                        }
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('to jest state ze stora:',state);
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        userProjects: data => dispatch({type: 'firebaseUser/USERPROJECTS', data})
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyProjects))


