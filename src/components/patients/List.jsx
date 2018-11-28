import React, { PureComponent } from 'react';
import { ButtonGroup, ButtonToolbar, Table } from 'reactstrap';

import './List.scss';
import { FaEye, FaPen } from "react-icons/fa";

class List extends PureComponent {
  render () {
    return (
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
          <tr>
            <th scope='row'>6tdaf1</th>
            <td>Cristiano</td>
            <td>Ronaldo</td>
            <td>Male</td>
            <td className='actions'>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaEye/> View</a>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaPen/> Edit</a>
            </td>
          </tr>
          <tr>
            <th scope='row'>6tdaf1</th>
            <td>Cristiano</td>
            <td>Ronaldo</td>
            <td>Male</td>
            <td className='actions'>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaEye/> View</a>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaPen/> Edit</a>
            </td>
          </tr>
          <tr>
            <th scope='row'>6tdaf1</th>
            <td>Cristiano</td>
            <td>Ronaldo</td>
            <td>Male</td>
            <td className='actions'>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaEye/> View</a>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaPen/> Edit</a>
            </td>
          </tr>
          <tr>
            <th scope='row'>6tdaf1</th>
            <td>Cristiano</td>
            <td>Ronaldo</td>
            <td>Male</td>
            <td className='actions'>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaEye/> View</a>
              <a href='#' className='btn btn-outline-primary btn-sm'><FaPen/> Edit</a>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default List;
