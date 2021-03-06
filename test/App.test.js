import React from 'react';
import { shallow } from 'enzyme';
import Component from '../src/components/App';

test('App', () => {
  const component = shallow(<Component />);
  expect(component.find('div')).toHaveProperty('className', 'quoteApp');
});
