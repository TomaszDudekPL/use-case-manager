/* eslint-disable react/prop-types */
import React from 'react';
import MyProjects from './MyProjects'
import ProjectDetails from './ProjectDetails'
import RegisteredUsers from '../components/RegisteredUsers'
import {Grid, Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'


const Protected = (props) => {


    return (
        <Grid>
            <Row className="pos-relative top-150">
                <Col xs={12} md={4}>
                    {/*<Route path={`${props.match.url}/:userId`} component={MyProjects}/>*/}
                    <MyProjects/>
                    {/*<Route path={`${props.match.url}/:userId`} component={RegisteredUsers}  label="Add to this project"/>*/}
                    <RegisteredUsers label="Add to this project"/>
                </Col>
                <Col xs={12} md={8}>
                    <ProjectDetails />
                    {/*<Route path={`${props.match.url}/:projectId`} component={ProjectDetails}/>*/}
                </Col>
            </Row>
        </Grid>
    );
};


export default Protected;


