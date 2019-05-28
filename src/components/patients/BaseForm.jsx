import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class BaseForm extends Component {
  static propTypes = {
    patient: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
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
    );
  }

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.patient);
  };

  changeValue = (key) => (event) => {
    event.preventDefault();
    let patient = this.state.patient;
    patient.user.data[key] = event.target.value;
    this.setState(() => ({ patient }));
  };
}

export default BaseForm;
