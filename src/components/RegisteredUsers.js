import React from 'react'
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import firebase from 'firebase'
import {LinkContainer} from 'react-router-bootstrap'


const title = (
    <h3>Registered Users</h3>
);

export default class RegisteredUsers extends React.Component {

    state = {
        users: []
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
            )
        }






    render() {

        return (
            <div id="RegisteredUsers">
                <Panel header={title} bsStyle="danger">
                    <ListGroup fill className="list-group">
                        {
                            this.state.users.map(
                                user =>
                                    (
                                        <ListGroupItem className="flex flx-space-between block" key={user.key}>{user.username}
                                            <Button bsStyle="success" bsSize="xsmall" className="block-btn">{this.props.label}</Button>
                                        </ListGroupItem>
                                   )
                            )

                        }

                    </ListGroup>
                </Panel>
            </div>
        )
    }
};

