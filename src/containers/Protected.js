/* eslint-disable react/prop-types */
import React from 'react';
import MyProjects from '../components/MyProjects'
import ProjectDetails from '../components/ProjectDetails'
import UseCaseList from '../components/UseCaseList'
import RegisteredUsers from '../components/RegisteredUsers'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import NewProjectModal from  './NewProjectModal';
import AddNewListModal from "./AddNewListModal";



const Protected = () => {


  return (
    <Grid>
      <Row className="pos-relative top-150">
        <Col xs={12} md={4}>
          <NewProjectModal title='+Add New Project'/>
          <MyProjects />
          <RegisteredUsers label="Add to this project"/>
        </Col>
        <Col xs={12} md={8}>
          <ProjectDetails />
          <AddNewListModal />
          <UseCaseList />
        </Col>
      </Row>
    </Grid>
  );
};


export default Protected;


