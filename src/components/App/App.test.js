import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should start with the expected states', () => {

    expect(wrapper.state().local.length).toEqual(8);
    expect(wrapper.state().entertainment.length).toEqual(8);
    expect(wrapper.state().health.length).toEqual(8);
    expect(wrapper.state().science.length).toEqual(8);
    expect(wrapper.state().technology.length).toEqual(8);
    expect(wrapper.state().currentPage.length).toEqual(8);
  });

//   let wrapper;
// const mockAddIdea = jest.fn()
//
// beforeEach(() => {
//   wrapper = shallow(<Form addIdea={ mockAddIdea } />)
// });
//
// it('should match the snapshot', () => {
//     expect(wrapper).toMatchSnapshot()
// });

it('should match the snapshot with all data passed in correctly', () => {

  expect(wrapper).toMatchSnapshot();
});

  // it('should be able to change the currentPage in state displayed with changePage', () => {
  //   instance.state = {
  //     newData: [{ someNews: 'news', moreNews: 'its great' }, { someOtherNews: 'otherNews', moreOtherNews: 'its so great' }],
  //     currentPage: [{local: 'local news', moreLocal: 'moreNews'}, {lastNews: 'end'}]
  //   }
  //   expect(instance.state.currentPage).toEqual([{local: 'local news', moreLocal: 'moreNews'}, {lastNews: 'end'} ])
  //   instance.changePage(newData)
  //   expect(instance.state.currentPage).toEqual(newData)
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
