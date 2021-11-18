import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
const Header = () => {
    return (
    <div className="sam_header section__padding" id="home">
    <div className="sam_header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with me</h1>
      <p>
      Hi, My name is Sam and I am a Full-Stack Software Engineer and a Personal Trainer.
      </p>

      <div className="sam_header-content__people">
        <img src={people} alt="" />
        <p>1,600 people has visited the site</p>
      </div>
    </div>

    <div className="sam_header-image">
      <img src={ai} alt="" />
    </div>
  </div>
    )
}

export default Header
