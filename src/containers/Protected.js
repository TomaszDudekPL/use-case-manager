/* eslint-disable react/prop-types */
import React from 'react';
import MyProjects from './MyProjects'
import ProjectDetails from './ProjectDetails'
import RegisteredUsers from '../components/RegisteredUsers'
import {Grid, Row, Col} from 'react-bootstrap'
import CarouselExample from "../components/Carousel";




const Protected = () => {


  return (
    <Grid>
      <Row className="pos-relative top-150">
        <Col xs={12} md={4}>
          <MyProjects />
          <RegisteredUsers label="Add to this project"/>
        </Col>
        <Col xs={12} md={8}>
          <ProjectDetails />
        </Col>
      </Row>
      <CarouselExample />
    </Grid>
  );
};


export default Protected;


