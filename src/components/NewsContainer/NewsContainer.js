import React from 'react';
import './NewsContainer.css'


const NewsContainer = (props) => {
  return props.ideas.map(newsArticle => {
    return (<article key={newsArticle.id}>
      <h2>{newsArticle.headline}</h2>
      <img src={newsArticle.img}/>
      <p>{newsArticle.description}</p>
    </article>)
  })
}

export default NewsContainer;
