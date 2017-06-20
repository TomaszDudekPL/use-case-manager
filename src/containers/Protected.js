/* eslint-disable react/prop-types */
import React from 'react';
import MyProjects from '../components/MyProjects'
import ProjectDetails from '../components/ProjectDetails'
import UseCaseList from '../components/UseCaseList'
import {Grid} from 'react-bootstrap'


const Protected = () => {



  return (
    <Grid>
    <section id="protected">
      <div>
        <MyProjects />
      </div>
      <div>
        <ProjectDetails />
      </div>
      <div>
        <UseCaseList />
      </div>
    </section>
    </Grid>
  );
};


export default Protected;


