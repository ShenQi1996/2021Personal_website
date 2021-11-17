import React from 'react'
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import './blog.css';
const Blog = () => {
    return (
        <div className="sam_blog section__padding" id="Projects">
        <div className="sam_blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="sam_blog-container">
          <div className="sam_blog-container_groupA">
            <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <div className="sam_blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
        </div>
      </div>
    )
}

export default Blog