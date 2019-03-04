import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export class Edit extends Component {
  propTypes = {
    patient: PropTypes.object.isRequired
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
        <Form>
          <FormGroup>
            <Label for='first_name'>First Name</Label>
            <Input type='text' id="first_name" placeholder='First Name' value={firstName}/>
          </FormGroup>
          <FormGroup>
            <Label for='last_name'>Last Name</Label>
            <Input type='text' id="last_name" placeholder='Last Name' value={lastName}/>
          </FormGroup>
          <FormGroup>
            <Label for='date_of_birth'>Date of Birth</Label>
            <Input type='date' id="date_of_birth" placeholder='Date of Birth' value={dateOfBirth}/>
          </FormGroup>
          <FormGroup>
            <Label for='sex'>Sex</Label>
            <Input type='select' id="sex" placeholder='Sex' value={sex}>
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
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
