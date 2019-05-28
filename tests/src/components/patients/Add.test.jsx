import React from 'react';
import { shallow } from 'enzyme';
import patients from '../../../fixtures/patients';
import { Add } from '../../../../src/components/patients/Add';

let add;
let createPatient;
beforeEach(() => {
  createPatient = jest.fn();
  add = shallow(<Add patient={patients[0]} createPatient={createPatient}/>)
});

describe('Add patient', () => {
  it('renders correctly', () => {
    expect(add).toMatchSnapshot();
  });

  it('updates the patient when the form is submitted', () => {
    add.find('BaseForm').props().onSubmit(patients[0]);

    expect(createPatient).toHaveBeenCalledWith(patients[0]);
  });
});
