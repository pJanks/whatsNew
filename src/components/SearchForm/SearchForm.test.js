import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
    instance = wrapper.instance()
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  });
});
