import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaEye, FaPen, FaPlus } from 'react-icons/fa';
import React, { Fragment, PureComponent } from 'react';
import Search from './Search';

import './List.scss';

class List extends PureComponent {
  sexes = {
    male: 'Male',
    female: 'Female'
  };

  render () {
    return (
      <Fragment>
        <div className='title'>
          <span className='buttons float-right'>
            <a href='#' className='btn btn-primary btn-sm'><FaPlus/> Patient</a>
          </span>
          <h1>Patients</h1>
        </div>
        <Search/>
        <Table striped borderless hover className='patients-list'>
          <thead>
            <tr>
              <th>Identifier</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sex</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.patients &&
              this.props.patients.map((patient, index) => (
                <tr key={index}>
                  <th scope='row'>{patient.identifier}</th>
                  <td>{patient.user.data.first_name}</td>
                  <td>{patient.user.data.last_name}</td>
                  <td>{this.sexes[patient.user.data.sex]}</td>
                  <td className='actions'>
                    <a href='#' className='btn btn-outline-primary btn-sm'><FaEye/> View</a>
                    <a href='#' className='btn btn-outline-primary btn-sm'><FaPen/> Edit</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Fragment>
    )
  }
}

List.propTypes = {
  patients: PropTypes.array
};

const mapStateToProps = ({ patients }) => ({
  patients: patients.list
});

export default connect(mapStateToProps)(List);
