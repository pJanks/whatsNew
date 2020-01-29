import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (<article key={props.article.id}>
    <h2>{props.article.headline}</h2>
    <img src={props.article.img}/>
    <p>{props.article.description}</p>
  </article>)
}

export default NewsArticle;
