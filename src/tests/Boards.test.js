import React from 'react';
import Boards from './../components/Boards';
import '../../tests_setup';
import BoardTile from './../components/BoardTile';
import { MemoryRouter } from 'react-router';

describe('state', () => {
  it('sets right state', () => {
    const wrapper = shallow(<Boards />);
    expect(wrapper.state('boards')).toEqual([]);

    setImmediate(() => {
      expect(wrapper.state('boards')).toEqual([{ id: 1, name: 'Board1' }, { id: 2, name: 'Board2' }]);
    });
  });
})

describe('components rendered', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Boards/>
      </MemoryRouter>
    );
  });

  it('renders one BoardTile component for each board', () => {
    expect(wrapper.find(Boards)).toHaveLength(1);

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find(BoardTile)).toHaveLength(2);
    });
  });
});
