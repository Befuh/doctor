import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import {FaPlus} from 'react-icons/fa';
import List from '../patients/List';
import SearchForm from '../patients/Search';

import './Content.scss';

export const Content = () => (
  <Container className='content'>
    <div className='title'>
      <span className='buttons float-right'>
        <a href='#' className='btn btn-primary btn-sm'><FaPlus/> Patient</a>
      </span>
      <h1>Patients</h1>
    </div>
    <SearchForm/>
    <List/>
  </Container>
);

export default connect()(Content);
