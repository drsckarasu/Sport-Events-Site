import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const Search = ({ setSearchStatus, searchStatus }) => {
  const findHandler = e => {
    setSearchStatus(e.target.value);
  };
  return (
    <form>
      <div className="search">
        <input
          value={searchStatus}
          onChange={findHandler}
          type="text"
          placeholder="Search event"
          className="search_input"
        />
      </div>
    </form>
  );
};

export default Search;

Search.propTypes = {
  searchStatus: PropTypes.string.isRequired,
  setSearchStatus: PropTypes.func.isRequired,
};
