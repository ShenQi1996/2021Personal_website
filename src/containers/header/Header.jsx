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
      I am a person that loves developing, designing, and delivering software and websites used by all kinds of businesses. A proven leader with a number of years of experience who is driven to make the world a better place one solution at a time and create a personal brand that people remember me, build things that represent me, and appreciate people that helped me.
      </p>

      <div className="sam_header-content__people">
        <img src={people} />
        <p>1,600 people has visited the site</p>
      </div>
    </div>

    <div className="sam_header-image">
      <img src={ai} />
    </div>
  </div>
    )
}

export default Header
