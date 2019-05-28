import BaseForm from './BaseForm';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

export class Add extends PureComponent {
  static propTypes = {
    createPatient: PropTypes.func.isRequired
  };

  render () {
    return (
      <Fragment>
        <div className='title'>
          <h1>Add Patient</h1>
        </div>
        <BaseForm onSubmit={this.submit}/>
      </Fragment>
    )
  }

  submit = patient => {
    this.props.createPatient(patient);
  };
}

// TODO Attach redux functionality
