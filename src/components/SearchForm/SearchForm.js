import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

updateQuery = (event) => {
  this.setState({ query: event.target.value })
}

runSearch = (event) => {
  event.preventDefault();
  this.props.searchFromForm(this.state.query)
  this.setState({ query: '' })
}

enterPressed = (event) => {
    if (event.key === 'Enter') {
      this.updateQuery(event)
      this.runSearch(event)
    } else {
      return
    }
}

render = () => {
  return (<form>
    <button onClick={this.runSearch}>Search Here</button>
    <input
    type='text'
    onChange={this.updateQuery}
    value={this.state.query}
    onKeyPress={this.enterPressed}
    placeholder='Enter you search here'
    />
    </form>)
  }
}


export default SearchForm;
