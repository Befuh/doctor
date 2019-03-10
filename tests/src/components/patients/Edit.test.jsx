import React from 'react';
import { shallow } from 'enzyme';
import patients from '../../../fixtures/patients';
import { Edit } from '../../../../src/components/patients/Edit';

let edit;
let preventDefault;
let updatePatient;
beforeEach(() => {
  preventDefault = jest.fn();
  updatePatient = jest.fn();
  edit = shallow(<Edit patient={patients[0]} updatePatient={updatePatient}/>)
});

describe('Edit patients', () => {
  it('renders correctly', () => {
    expect(edit).toMatchSnapshot();
  });

  [
    { id: 'first_name', value: 'Cristiana' },
    { id: 'last_name', value: 'Ronaldinha' },
    { id: 'date_of_birth', value: '1985-07-09' },
    { id: 'sex', value: 'female' }
  ].forEach(({ id, value }) => {
    it(`changes the input ${id}`, () => {
      edit.find(`#${id}`).simulate('change', { preventDefault, target: { value } });

      expect(preventDefault).toHaveBeenCalled();
      expect(edit.state().patient.user.data[id]).toBe(value);
    });
  });

  it('updates the patient when the form is submitted', () => {
    edit.find('Form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(updatePatient).toHaveBeenCalledWith(patients[0]);
  });
});
