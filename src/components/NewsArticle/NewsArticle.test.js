import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  let wrapper, instance, mockNewsArticle;

  beforeEach(() => {
    mockNewsArticle = {
      id: 3,
      headline: 'crazy news',
      img: 'aPicture',
      description: 'something crazy',
      url: 'www.hi.com'
    }
    wrapper = shallow(<NewsArticle key={mockNewsArticle.id} article={mockNewsArticle} />)
    instance = wrapper.instance()
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  });
});
