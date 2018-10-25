import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../../src/components/layout/Header';

describe('Header', () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header/>)
  });

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
