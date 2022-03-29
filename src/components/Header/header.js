import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import sport from '../../assets/images/sports_events.png';

function Header() {
  const [classUserButton, setClassUserButton] = useState('btn_sign');
  const [classUser, setClassUser] = useState('none');

  const changeUser = () => {
    setClassUserButton('none');
    setClassUser('active');
  };

  return (
    <div className="header">
      <div className="header_content">
        <Link to="/">
          <img src={sport} className="sport_logo" alt="sport_logo"></img>
        </Link>
        <div className="header_content_right">
          {/* <button className="btn_join_now" type="submit">
            JOIN NOW
          </button> */}
          <button
            className={classUserButton}
            type="submit"
            onClick={changeUser}
          >
            SIGN IN
          </button>
          <Link to="/admin-Page" className={classUser}>
            Admin Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
