import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local
    }
  }

  render () {
    console.log(local);
    return (<main>
        <h1>What's News</h1>
        <NewsContainer ideas={this.state.local}/>
      </main>)
  }
}

export default App;
