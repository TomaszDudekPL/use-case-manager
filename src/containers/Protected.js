/* eslint-disable react/prop-types */
import React from 'react';
import MyProjects from '../components/MyProjects'
import ProjectDetails from '../components/ProjectDetails'
import UseCaseList from '../components/UseCaseList'
import RegisteredUsers from '../components/RegisteredUsers'
import {Grid, Row, Col} from 'react-bootstrap'


const Protected = () => {


  return (
    <Grid>
      <Row className="pos-relative top-200">
        <Col xs={12} md={4}>
          <MyProjects />
          <RegisteredUsers />
        </Col>
        <Col xs={12} md={8}>
          <ProjectDetails />
          <UseCaseList />
        </Col>
      </Row>
    </Grid>
  );
};


export default Protected;


