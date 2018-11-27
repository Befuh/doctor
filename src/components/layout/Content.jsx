import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import SearchForm from '../patients/SearchForm';

import './Content.scss';

export const Content = () => (
  <Container className='content'>
    <div className='title'>
      <span className='buttons float-right'>
        <a href='#' className='btn btn-primary btn-sm'>New Patient</a>
      </span>
      <h1>Patients</h1>
    </div>
    <SearchForm/>
  </Container>
);

export default connect()(Content);
