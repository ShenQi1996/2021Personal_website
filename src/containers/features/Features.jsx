import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';
const Features = () => {
    const featuresData = [
        {
          title: 'Languages',
          text: 'HTML5 ,CSS or SCSS, JavaScript, React, Redux, Ruby, Ruby on Rails, Mongoose, Node.js, Express.js, jQuery'
        },
        {
          title: 'Database',
          text: 'MySQL, MongoDB, SQLite3, PostgreSQL, AWS Dynamodb, AWS S3  ',
        },
        {
          title: 'Technologies',
          text: 'Git, Photoshop, WordPress, AWS, Google Analytics, Shopify, Github, Heroku, Webpack, Firebase, Google Maps API,',
        },
      ];

    return (
 <div className="sam__features section__padding" id="Skills">
    <div className="sam__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Let's Make it Happen.</h1>
      <p>Here are my Skills</p>
    </div>
    <div className="sam__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
    )
}

export default Features
