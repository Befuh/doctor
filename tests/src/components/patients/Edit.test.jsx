import React from 'react';
import { shallow } from 'enzyme';
import patients from '../../../fixtures/patients';
import { Edit } from '../../../../src/components/patients/Edit';

let edit;
let updatePatient;
beforeEach(() => {
  updatePatient = jest.fn();
  edit = shallow(<Edit patient={patients[0]} updatePatient={updatePatient}/>)
});

describe('Edit patients', () => {
  it('renders correctly', () => {
    expect(edit).toMatchSnapshot();
  });

  it('updates the patient when the form is submitted', () => {
    edit.find('BaseForm').props().onSubmit(patients[0]);

    expect(updatePatient).toHaveBeenCalledWith(patients[0]);
  });
});
