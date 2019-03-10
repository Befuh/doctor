import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { update as updatePatient } from '../../actions/patients';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export class Edit extends Component {
  static propTypes = {
    patient: PropTypes.object.isRequired,
    updatePatient: PropTypes.func.isRequired
  };

  state = {
    patient: this.props.patient
  };

  render () {
    const {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      sex
    } = this.state.patient.user.data;
    return (
      <Fragment>
        <div className='title'>
          <h1>Edit Patient</h1>
        </div>
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label for='first_name'>First Name</Label>
            <Input
              type='text'
              id="first_name"
              placeholder='First Name'
              value={firstName}
              onChange={this.changeValue('first_name')}
            />
          </FormGroup>
          <FormGroup>
            <Label for='last_name'>Last Name</Label>
            <Input
              type='text'
              id="last_name"
              placeholder='Last Name'
              value={lastName}
              onChange={this.changeValue('last_name')}
            />
          </FormGroup>
          <FormGroup>
            <Label for='date_of_birth'>Date of Birth</Label>
            <Input
              type='date'
              id="date_of_birth"
              placeholder='Date of Birth'
              value={dateOfBirth}
              onChange={this.changeValue('date_of_birth')}
            />
          </FormGroup>
          <FormGroup>
            <Label for='sex'>Sex</Label>
            <Input type='select' id="sex" placeholder='Sex' value={sex} onChange={this.changeValue('sex')}>
              <option>female</option>
              <option>male</option>
            </Input>
          </FormGroup>
          <div className='text-right'>
            <Button color='primary'>Save Patient</Button>
          </div>
        </Form>
      </Fragment>
    )
  }

  submit = event => {
    event.preventDefault();
    this.props.updatePatient(this.state.patient);
  };

  changeValue = (key) => (event) => {
    event.preventDefault();
    let patient = this.state.patient;
    patient.user.data[key] = event.target.value;
    this.setState(() => ({ patient }));
  };
}

const mapDispatchToProps = dispatch => ({
  updatePatient: (patient) => dispatch(updatePatient(patient))
});

export default connect(null, mapDispatchToProps)(Edit);
