import React from 'react';
import './aside.scss';
import PropTypes from 'prop-types';
import Tag from './Tag/tag';

const tags = [
  'Sport',
  'Football',
  'Basketball',
  'Volleyball',
  'Hockey',
  'Racing',
];

const Aside = ({ setLabelTagStatus }) => {
  return (
    <div className="tags">
      <h2>Tags</h2>
      <div className="tags_collection">
        {tags.map(tag => (
          <Tag
            name={tag}
            setLabelTagStatus={setLabelTagStatus}
            key={tags.indexOf(tag) + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Aside;

Aside.propTypes = {
  setLabelTagStatus: PropTypes.func.isRequired,
};
