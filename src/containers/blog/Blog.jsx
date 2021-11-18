import React from 'react'
import Article from '../../components/article/Article';
import blog01 from '../../assets/GrillLit.PNG';
import blog02 from '../../assets/fullstack.PNG';
import blog03 from '../../assets/java.PNG';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/WEATER.PNG';
import './blog.css';
const Blog = () => {
    return (
        <div className="sam_blog section__padding" id="Projects">
        <div className="sam_blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> Here are my projects</h1>
        </div>
        <div className="sam_blog-container">
          <div className="sam_blog-container_groupA">
            <Article imgUrl={blog04} date="Sep 26, 2021" text=" AWS Call Center" text2="AWS Connect with Lambda- Call Center for looking up vanity numbers based on the caller's phone number."git="https://github.com/ShenQi1996/AWS-Lambda"/>
          </div>
          <div className="sam_blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" text="PIXELPERFECT" text2="PixelPerfect is a functional clone of 500px, that has most of the functionality of the original site. Is a network for artists to display their artwork and their love with the fantasy world." live="https://pixelperfectsam.herokuapp.com/#/" git="https://github.com/ShenQi1996/PixelPerfect" />
            <Article imgUrl={blog01} date="Sep 26, 2021" text="GRILLLIT" text2="This app is all about getting friends and family together to enjoy some nice delicious barbeque. Find grilling events that were created by others within your locality, allowing you to be able to socialize and network with others who love good food and enjoy the company of others." live="https://grilllit.herokuapp.com/#/" git="https://github.com/ShenQi1996/GrillLit"/>
            <Article imgUrl={blog03} date="Sep 26, 2021" text="HALF-NOTE" text2 = "Half-note is website that creates muise notes The website only using HTML, CSS, and JavaScript." live="https://shenqi1996.github.io/Half_Note/" git="https://github.com/ShenQi1996/Half_Note" />
            <Article imgUrl={blog05} date="Sep 26, 2021" text="WEATER APP" text2="One of my first ReactJS project I have learn so much about ReactJS and HTML." git="https://github.com/ShenQi1996/ReactJS-PJ-Weater-App" />
          </div>
        </div>
      </div>
    )
}

export default Blog
