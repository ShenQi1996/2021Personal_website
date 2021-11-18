import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <div className="sam_footer section__padding">
        <div className="sam_footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
    
        <div className="sam_footer-btn">
        <p><a href="https://calendly.com/qisam/meetingwithsam?month=2021-11" target="_blank" rel="noreferrer">Let's Meet</a></p>
        </div>
    
        <div className="sam_footer-links">
          <div className="sam_footer-links_logo">
            {/* <img src={SamLogo} alt="sam_logo" /> */}
            <h1>Sam Qi</h1>
          </div>
          <div className="sam_footer-links_div">
            <h4>Links</h4>
            <p><a href="https://www.linkedin.com/in/shenqi1993/" target="_blank" rel="noreferrer">Linkedin</a></p>
            <p><a href="https://github.com/ShenQi1996" target="_blank" rel="noreferrer">Github</a></p>
          </div>
          {/* <div className="sam_footer-links_div">
            <h4>Company</h4>
          </div> */}
          <div className="sam_footer-links_div">
            <h4>Get in touch</h4>
            <p>2024 60th Brooklyn, New York, 11204</p>
            <p>+1347-757-7730</p>
            <p>qisam1989@gmail.com</p>
          </div>
        </div>
    
        <div className="sam_footer-copyright">
          <p>@2021 All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
