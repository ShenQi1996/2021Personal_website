import React from 'react'
import './article.css';
const Article = ({imgUrl, date, text, text2, live, git}) => {
  let btn;
  if(live && !git){
    btn = (
      <div className="sam_blog-container_article-content_box2">
      <a href={live} target="_blank" rel="noreferrer">Live</a>
      </div>
    )
  }else if(git && !live){
    btn = (
      <div className="sam_blog-container_article-content_box2">
      <a href={git} target="_blank" rel="noreferrer">Github</a>
      </div>
    )
  }else if(live && git){
    btn = (
      <div className="sam_blog-container_article-content_box2">
      <a href={live} target="_blank" rel="noreferrer">Live</a>
      <a href={git} target="_blank" rel="noreferrer">Github</a>
      </div>
    )
  }else{
    <div className="sam_blog-container_article-content_box2">
    </div>
  }
    return (
        <div className="sam_blog-container_article">
        <div className="sam_blog-container_article-image">
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="sam_blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
            <h4>{text2}</h4>
          </div>
          {btn}
        </div>
      </div>
    )
}

export default Article
