import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()

  })

  it('should start with the expected states', () => {

    expect(wrapper.state().local.length).toEqual(8);
    expect(wrapper.state().entertainment.length).toEqual(8);
    expect(wrapper.state().health.length).toEqual(8);
    expect(wrapper.state().science.length).toEqual(8);
    expect(wrapper.state().technology.length).toEqual(8);
    expect(wrapper.state().currentPage.length).toEqual(8);
  });

  it('should be able to change the news articles shown with changePage', () => {

    let local = [{localNews: 'someNews'}, {moreLocalNews: 'moreNews'}]
    instance.state = {
      local: local,
      currentPage: [{scienceNews: 'coolNews'}, {moreScience: 'real cool'}]
    }
    instance.changePage('local')
    expect(instance.state.currentPage).toEqual(local)
  })


it('should match the snapshot with all data passed in correctly', () => {

  expect(wrapper).toMatchSnapshot();
});


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
