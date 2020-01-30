import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should start with the expected states', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.state().local.length).toEqual(8);
    expect(wrapper.state().entertainment.length).toEqual(8);
    expect(wrapper.state().health.length).toEqual(8);
    expect(wrapper.state().science.length).toEqual(8);
    expect(wrapper.state().technology.length).toEqual(8);
    expect(wrapper.state().currentPage.length).toEqual(8);

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
