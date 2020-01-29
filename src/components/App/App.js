import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
// import NewsArticle from '../NewsArticle/NewsArticle'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (<main>
      <h1>What's News</h1>
        <Menu />
        <NewsContainer ideas={this.state.local}/>
      </main>)
  }
}

export default App;
