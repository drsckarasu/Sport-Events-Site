import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/listItem';

const List = ({ dashboard, setDashboard }) => {
  return (
    <div className="list">
      {(dashboard.length === 0 && (
        <p className="list_empty">There are no content</p>
      )) ||
      dashboard
          .sort((a, b) => a.time - b.time)
          .map(item => (
            <ListItem
              label={item.label}
              img={item.img}
              title={item.title}
              time={item.time}
              key={item.id}
              dashboard={dashboard}
              setDashboard={setDashboard}
              item={item}
              description={item.description}
            />
          ))}
    </div>
  );
};

export default List;

List.propTypes = {
  dashboard: PropTypes.array.isRequired,
  setDashboard: PropTypes.func.isRequired,
};
