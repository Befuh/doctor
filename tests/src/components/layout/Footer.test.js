import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../../src/components/layout/Footer';

describe('Footer', () => {
  let footer;
  beforeEach(() => {
    footer = shallow(<Footer/>)
  });

  it('renders correctly', () => {
    expect(footer).toMatchSnapshot();
  });
});
