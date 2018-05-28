import React from 'react';
import App from './App';
import '../tests_setup';

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
