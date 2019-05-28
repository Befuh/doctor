import BaseForm from './BaseForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Fragment, PureComponent } from 'react';
import { update as updatePatient } from '../../actions/patients';

export class Edit extends PureComponent {
  static propTypes = {
    patient: PropTypes.object.isRequired,
    updatePatient: PropTypes.func.isRequired
  };

  render () {
    return (
      <Fragment>
        <div className='title'>
          <h1>Edit Patient</h1>
        </div>
        <BaseForm patient={this.props.patient} onSubmit={this.submit}/>
      </Fragment>
    )
  }

  submit = patient => {
    this.props.updatePatient(patient);
  };
}

const mapDispatchToProps = dispatch => ({
  updatePatient: (patient) => dispatch(updatePatient(patient))
});

export default connect(null, mapDispatchToProps)(Edit);
