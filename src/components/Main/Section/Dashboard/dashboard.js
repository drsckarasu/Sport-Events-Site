import React from 'react';
import './dashboard.scss';
import PropTypes from 'prop-types';
import Card from '../Card/card';

const Dashboard = ({ filterCards }) => {
  return (
    <div className="dashboard">
      {(filterCards.length === 0 && (
        <p className="dashboard_empty">There are no content</p>
      )) ||
        filterCards
          .sort((a, b) => a.time - b.time)
          .map(card => (
            <Card
              label={card.label}
              img={card.img}
              title={card.title}
              time={card.time}
              key={card.id}
              description={card.description}
            />
          ))}
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  filterCards: PropTypes.array.isRequired,
};
