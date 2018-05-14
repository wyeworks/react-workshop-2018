// Enzyme
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;

// Fetch mock
const boardsFetch = Promise.resolve({
  json: () => Promise.resolve([{ id: 1, name: 'Board1' }, { id: 2, name: 'Board2' }]),
});

global.fetch = () => boardsFetch;
