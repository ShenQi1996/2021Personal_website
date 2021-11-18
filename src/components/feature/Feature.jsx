import React from 'react'
import './feature.css';
const Feature = ({title, text, img}) => {
  let pro;
  if(img){
    pro = (
        <img src={img} alt=""/>
    )
  }else{
    pro = (
      <div className="none"></div>
    )
  }

    return (
        <div className="sam__features-container__feature">
          <div className="sam__features-container__feature-title">
          <div />
          <h1>{title}</h1>
          {pro}
          </div>
          <div className="sam__features-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
    )
}

export default Feature
