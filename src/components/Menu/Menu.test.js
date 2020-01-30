import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Menu changePage={ jest.fn() } />)
    instance = wrapper.instance()
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  });
});
