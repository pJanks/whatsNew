import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'


const NewsContainer = ( {news} ) => {
  return news.map(newsArticle => {
    return <NewsArticle key={newsArticle.id} article={newsArticle}/>
  })
}

export default NewsContainer;
