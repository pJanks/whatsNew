import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Card
      title="Bananas"
      description="B A N A N A S"
      id={3}
      removeIdea={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
