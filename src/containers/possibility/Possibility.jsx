import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
const Possibility = () => {
    return (
        <div className="sam_possibility section__padding" id="Experiences">
        <div className="sam_possibility-image">
          <img src={possibilityImage} alt="Experiences" />
        </div>
        <div className="sam_possibility-content">
          <h1 className="gradient__text">Experiences</h1>
          <h4>Blink Fitness - Personal Trainer </h4>
          <p>- Demonstrated exercises and routines to clients <br /> 
            - Monitoring client progress and ensuring clients are motivated<br />
            - Modify exercises according to clients fitness levels</p>
          <h4>BHMedWear - Web Developer/ Product Data Coordinator </h4>
          <p>- Develop data tracking and monitoring systems with SQL server, to keep the website and the company run smoothly <br />
            - Establish data entry criteria and standards for all products using MySQL and JQuery<br />
            - Analyze data to identify trends and project program outcomes using Google Analytics <br />
            - Worked with Management team to develop and launch an updated internal website hosted with Shopify <br />
            - Completed daily, weekly, monthly, period and annual report in Excel for corporate<br />
            - Provide IT services for all new development of the site. </p>
          <h4>Greenopia - Full Stack Developer 		</h4>
          <p>- Communicate with management or development team to prioritize needs, develop content criteria, or choose solutions based on the data from Google Analytics <br />
            - Design, build, update, and maintain website interface, utilizing HTML, JavaScript, and CSS <br />
            - Planned site/project design by clarifying goals with Trello <br />
            - Evaluate code to ensure that it is valid, is properly structured, and is compatible with browsers and devices <br />
            - Comprehended web reports to assess analytical behaviors from a usability standpoint <br />
          </p>
          <h4>Request For Resume Below</h4>
        </div>
      </div>
    )
}

export default Possibility
