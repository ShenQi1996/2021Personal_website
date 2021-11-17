import React from 'react'
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import './brand.css';
const Brand = () => {
    return (
        <div className="sam_brand section__padding">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </div>
    );
    
}

export default Brand
