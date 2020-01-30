import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'


const NewsContainer = ( {news} ) => {
  return (<section className='news-container'>
    {news.map(newsArticle => {
    return <NewsArticle key={newsArticle.id} article={newsArticle} />
  })}</section>)
}

export default NewsContainer;
