import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;

const boardsFetch = Promise.resolve({
  json: () => Promise.resolve([{ id: 1, name: 'Board1' }, { id: 2, name: 'Board2' }]),
});

global.fetch = () => boardsFetch;
