import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import SearchForm from '../patients/SearchForm';

import './Content.scss';

export const Content = () => (
  <Fragment>
    <div className='content-header'>
      <Container>
        <h1>Patients</h1>
      </Container>
    </div>
    <Container className='content'>
      <SearchForm/>
    </Container>
  </Fragment>
);

export default connect()(Content);
