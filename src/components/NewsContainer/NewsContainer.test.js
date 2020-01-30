import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  let wrapper, instance, mockNewsArticles;

  beforeEach(() => {
    mockNewsArticles = [{
      id: 3,
      headline: 'crazy news',
      img: 'aPicture',
      description: 'something crazy',
      url: 'www.hi.com'
    }, {
      id: 4,
      headline: 'more crazy news',
      img: 'anotherPicture',
      description: 'something even crazier',
      url: 'www.hello.com'
    }]
    wrapper = shallow(<NewsContainer news={mockNewsArticles} />)
    instance = wrapper.instance()
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  });
});
