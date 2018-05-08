import React from 'react';
import Boards from './../components/Boards';
import '../../setup';

describe('state', () => {
  it('sets right state', () => {
    const wrapper = shallow(<Boards />);
    expect(wrapper.state('boards')).toEqual([]);

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.state('boards')).toEqual([{ id: 1, name: 'Board1' }]);
    });
  });
})
