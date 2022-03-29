import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main.scss';
import Section from './Section/section';
import Aside from './Aside/aside';
import Search from './Section/Search/search';

const useLocationChange = action => {
  const location = useLocation();
  useEffect(() => {
    action(location);
  }, [location]);
};
const Main = ({ dashboard }) => {
  const [filterCards, setFilterCards] = useState([]);
  const [labelTagStatus, setLabelTagStatus] = useState('Sport');
  const [searchStatus, setSearchStatus] = useState('');

  useEffect(() => {
    if (filterCards && labelTagStatus === 'Sport') {
      setFilterCards(
        dashboard.filter(card =>
          card.title.toLowerCase().includes(searchStatus.toLowerCase())));
    } else {
      setFilterCards(
        dashboard.filter(
          card =>
            card.label === labelTagStatus &&
            card.title.toLowerCase().includes(searchStatus.toLowerCase())));
    }
  }, [labelTagStatus, searchStatus, dashboard]);

  useLocationChange(location => {
    console.log('handle route change here', location);
  });

  return (
    <div className="main">
      <div className="main_content">
        <Search searchStatus={searchStatus} setSearchStatus={setSearchStatus} />
        <div className="main_content_info">
          <Section filterCards={filterCards} />
          <Aside setLabelTagStatus={setLabelTagStatus} />
        </div>
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  dashboard: PropTypes.array.isRequired,
};
