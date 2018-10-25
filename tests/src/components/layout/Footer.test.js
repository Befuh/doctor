import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../../src/components/layout/Footer';

describe('Footer', () => {
  let header;
  beforeEach(() => {
    header = shallow(<Footer/>)
  });

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
