import React from 'react';
import PropTypes from 'prop-types';
import './section.scss';
import Dashboard from './Dashboard/dashboard';

const Section = ({ filterCards }) => {
  return (
    <div className="section">
      <Dashboard filterCards={filterCards} />
    </div>
  );
};

export default Section;

Section.propTypes = {
  filterCards: PropTypes.array.isRequired,
};
