import React from 'react'
import './whatSam.css';
import Feature from '../../components/feature/Feature';
import pro from "../../assets/pro1.jpg"
const WhatSam = () => {


    return (
        <div className="sam_whatSam section__margin" id="sam">
        <div className="sam_whatSam-feature">
          <Feature title="Who is Sam ?" text="I am a person that loves developing, designing, and delivering software and websites used by all kinds of businesses. A proven leader with a number of years of experience who is driven to make the world a better place one solution at a time and create a personal brand that people remember me, build things that represent me, and appreciate people that helped me." img={pro} />
        </div>
        <div className="sam_whatSam-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <a href="https://www.linkedin.com/in/shenqi1993/"  rel="noreferrer" target="_blank">Explore Sam's LinkedIn</a>
          <a href="https://github.com/ShenQi1996"  rel="noreferrer" target="_blank">Explore Sam's Github</a>
        </div>
        <div className="sam_whatSam-container">
          <Feature title="Web Design/ Development" text="A well-design website needs a great developer to make it happen. The developer is who makes the website." />
          <Feature title="Advertising" text="A well-planned website requires a person with web designer, web developer, content strategist in order to reach its full potential." />
          <Feature title="Education" text="Graduated from SUNY, University at Buffalo with Bachelor of Science in Computer Science degree" />
        </div>
      </div>
    )
}

export default WhatSam
