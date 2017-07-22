import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import firebase from 'firebase'
import {connect} from 'react-redux'


const title = (
    <h3>Registered Users</h3>
);

class RegisteredUsers extends React.Component {

    state = {
        users: [],
        areThereProjects: null
    };

    componentDidMount() {

        firebase.database().ref('Users').on(
            'value',
            snapshot => {
                const usersObject = snapshot.val();
                const userKeys = Object.keys(usersObject);
                const users = userKeys.map(
                    key => ({
                        ...usersObject[key],
                        key: key
                    })
                );

                this.setState({users: users})
            }
        );
        const user = firebase.auth().currentUser;
        firebase.database().ref('Users/' + user.uid + '/Projects/').on('value', snapshot => {
            const areThereProjects = snapshot.val();
            this.setState({
                areThereProjects: areThereProjects
            })
        })
    };

    handleAddUser = (e) => {

        if (this.props.project) {
            const user = firebase.auth().currentUser;
            let clickedElement = e.target.value;

            let selectedUser = this.state.users.filter(user => user.username === clickedElement ? user : null);

            firebase.database().ref('Users/' + user.uid + '/Projects/' + this.props.project.key + '/users').once('value', snapshot => {
                const arrayOfUsersObjects = snapshot.val();

                let condition2 = clickedElement !== this.props.project.owner;

                if (arrayOfUsersObjects && condition2) {
                    let userObject = {
                        username: selectedUser[0].username,
                        userId: selectedUser[0].key
                    };
                    arrayOfUsersObjects.push(userObject);

                    let condition1 = arrayOfUsersObjects.every(user => user.username !== clickedElement);

                    if (condition1) {

                        firebase.database().ref('Users/' + user.uid + '/Projects/' + this.props.project.key).update({
                            users: arrayOfUsersObjects
                        });

                        let projectId = this.props.project.key;
                        firebase.database().ref('Users/' + selectedUser[0].key + '/Projects/' + projectId).update({
                            title: this.props.project.title,
                            owner: this.props.project.owner,
                            users: arrayOfUsersObjects
                        })
                    }


                } else if (condition2) {

                    firebase.database().ref('Users/' + user.uid + '/Projects/' + this.props.project.key).update({
                        users: [{
                            username: selectedUser[0].username,
                            userId: selectedUser[0].key
                        }]
                    });


                    let table = [{
                        username: selectedUser[0].username,
                        userId: selectedUser[0].key
                    }];
                    let filteredArray = table.filter(user => user.username !== clickedElement);
                    let projectId = this.props.project.key;

                    firebase.database().ref('Users/' + selectedUser[0].key + '/Projects/' + projectId).update({
                        title: this.props.project.title,
                        owner: this.props.project.owner,
                        users: filteredArray
                    })
                }

            });

        }
    };


    render() {

        return (
            <div id="RegisteredUsers">
                <Panel header={title} bsStyle="danger">
                    <ListGroup fill className="list-group">
                        {
                            this.state.users.map(
                                user =>
                                    (
                                        <ListGroupItem className="flex flx-space-between block"
                                                       key={user.key}>{user.username}
                                            { this.state.areThereProjects ? <Button bsStyle="success" bsSize="xsmall"
                                                                                    className="block-btn"
                                                                                    value={user.username}
                                                                                    onClick={this.handleAddUser}>{this.props.label}</Button> : null}
                                        </ListGroupItem>
                                    )
                            )

                        }

                    </ListGroup>
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendNameOfUser: data => dispatch({type: 'USERNAME', data})
//     }
// };
export default connect(mapStateToProps, null)(RegisteredUsers);


