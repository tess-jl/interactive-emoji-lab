import React from 'react';
import Moods from './Moods';
import { shallow } from 'enzyme';

describe('container', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});

