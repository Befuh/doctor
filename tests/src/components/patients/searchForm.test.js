import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../../../../src/components/patients/SearchForm';

let wrapper, startUpdatePatients, preventDefault;
beforeEach(() => {
  preventDefault = jest.fn();
  startUpdatePatients = jest.fn();
  wrapper = shallow(<SearchForm startUpdatePatients={startUpdatePatients}/>);
});

describe('search form', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates the search field values', () => {
    [
      {
        name: 'firstName',
        index: 0,
        selector: 'input',
        event: 'change',
        value: 'Cristiano'
      },
      {
        name: 'lastName',
        index: 1,
        selector: 'input',
        event: 'change',
        value: 'Ronaldo'
      },
      {
        name: 'identifier',
        index: 2,
        selector: 'input',
        event: 'change',
        value: '223lslkjföldsjfs'
      },
      {
        name: 'sex',
        index: 0,
        selector: 'select',
        event: 'change',
        value: 'male'
      }
    ].forEach(field => {
      preventDefault = jest.fn();
      const value = field.value;
      wrapper.find(field.selector).at(field.index).simulate(field.event, { preventDefault, target: { value } });
      expect(wrapper.state()[field.name]).toEqual(field.value);
    });
  });

  it('starts the process to update the patients list', () => {
    wrapper.setState({ lastName: 'Messi' });

    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(startUpdatePatients).toHaveBeenCalledWith({
      firstName: '',
      lastName: 'Messi',
      identifier: '',
      sex: ''
    })
  });
});
