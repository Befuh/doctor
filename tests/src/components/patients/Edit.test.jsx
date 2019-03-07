import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../../../../src/components/patients/Edit';

let edit;
beforeEach(() => {
  const patient = {
    id: 8,
    user_id: 7,
    identifier: 'ade521',
    user: {
      data: {
        id: 7,
        first_name: 'Fingong',
        last_name: 'Tralalla',
        date_of_birth: '1980-01-15',
        sex: 'male'
      }
    }
  };
  edit = shallow(<Edit patient={patient}/>)
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
      const preventDefault = jest.fn();

      edit.find(`#${id}`).simulate('change', { preventDefault, target: { value } });

      expect(preventDefault).toHaveBeenCalled();
      expect(edit.state().patient.user.data[id]).toBe(value);
    });
  })
});
