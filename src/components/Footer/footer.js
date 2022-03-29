import React from 'react';
import './footer.scss';
import sport from '../../assets/images/sports_events.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <img src={sport} className="sport_logo_img" alt="sport_logo"></img>
        <div className="footer_text">
          <p>SPORT</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
