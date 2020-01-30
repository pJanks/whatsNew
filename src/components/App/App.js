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
      local,
      entertainment,
      health,
      science,
      technology,
      currentPage: local
    }
  }

  changePage = (clickedPage) => {
    this.setState({ currentPage: this.state[clickedPage] })
  }

  render () {
      return (<main className='everything'>
          <header>
            <h1>What's News</h1>
          </header>
          <section className='main-content'>
        <Menu changePage={this.changePage} />
        <NewsContainer news={this.state.currentPage} />
          </section>
      </main>)
  }
}

export default App;
