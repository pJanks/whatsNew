import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'


const NewsContainer = (props) => {
  return props.ideas.map(newsArticle => {
    return <NewsArticle article={newsArticle}/>
  })
}

export default NewsContainer;
