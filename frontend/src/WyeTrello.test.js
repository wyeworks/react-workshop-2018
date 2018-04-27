import React from 'react';
import ReactDOM from 'react-dom';
import WyeTrello from './WyeTrello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WyeTrello />, div);
  ReactDOM.unmountComponentAtNode(div);
});
