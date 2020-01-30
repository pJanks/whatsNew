import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'

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

  searchFromForm = (query) => {
    let searchMatches = this.state.currentPage.filter(article => {
      if (!article.description.toLowerCase().includes(query.toLowerCase()) && !article.headline.toLowerCase().includes(query.toLowerCase())) {
        return
      } else {
        return article
      }
    })
    if (searchMatches.length) {
      this.setState({ currentPage: searchMatches})
    }
  }

  changePage = (clickedPage) => {
    this.setState({ currentPage: this.state[clickedPage] })
  }

  render () {
      return (<main className='everything'>
          <header>
            <h1>What's News</h1>
            <SearchForm searchFromForm={this.searchFromForm} />
          </header>
          <section className='main-content'>
        <Menu changePage={this.changePage} />
        <NewsContainer news={this.state.currentPage} />
          </section>
      </main>)
  }
}

export default App;
