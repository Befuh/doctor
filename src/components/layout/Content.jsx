import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import List from '../patients/List';
import Edit from '../patients/Edit';

import './Content.scss';

export const Content = () => (
  <Container className='content'>
    <Edit
      patient={{
        id: 8,
        user_id: 7,
        identifier: 'ade521',
        user: {
          data: {
            id: 7,
            first_name: 'Fingong',
            last_name: 'Tralalla',
            date_of_birth: '1980-01-15',
            sex: 'male'
          }
        }
      }}
    />
  </Container>
);

export default connect()(Content);
