import React from 'react';
import App from './App';
import '../setup';

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
