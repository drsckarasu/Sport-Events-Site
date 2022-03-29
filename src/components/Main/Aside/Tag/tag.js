import React from 'react';
import PropTypes from 'prop-types';
import './tag.scss';

const Tag = ({ name, setLabelTagStatus }) => {
  const tagHandler = e => {
    setLabelTagStatus(e.target.value);
  };
  return (
    <>
      <button onClick={tagHandler} value={name} className="tag" type="button">
        {name}
      </button>
    </>
  );
};

export default Tag;

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  setLabelTagStatus: PropTypes.func.isRequired,
};
