import React from 'react';
import {App} from '../../src/app';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App/>);
});

describe('App', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
