import React from 'react';
import { shallow } from 'enzyme';
import patients from '../../../fixtures/patients';
import BaseForm from '../../../../src/components/patients/BaseForm';

let baseForm;
let preventDefault;
let onSubmit;
beforeEach(() => {
  preventDefault = jest.fn();
  onSubmit = jest.fn();
  baseForm = shallow(<BaseForm patient={patients[0]} onSubmit={onSubmit}/>)
});

describe('Patient base form', () => {
  it('renders correctly', () => {
    expect(baseForm).toMatchSnapshot();
  });

  [
    { id: 'first_name', value: 'Cristiana' },
    { id: 'last_name', value: 'Ronaldinha' },
    { id: 'date_of_birth', value: '1985-07-09' },
    { id: 'sex', value: 'female' }
  ].forEach(({ id, value }) => {
    it(`changes the input ${id}`, () => {
      baseForm.find(`#${id}`).simulate('change', { preventDefault, target: { value } });

      expect(preventDefault).toHaveBeenCalled();
      expect(baseForm.state().patient.user.data[id]).toBe(value);
    });
  });

  it('submits the patient form when triggered', () => {
    baseForm.find('Form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(patients[0]);
  });
});
