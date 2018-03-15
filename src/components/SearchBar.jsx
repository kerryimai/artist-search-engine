import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import loupe from '../loupe.svg';

const SearchBar = ({ handleInputChange, handleArtistSearch }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleArtistSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn" onClick={handleArtistSearch}>
        <img className="loupe-icon" src={loupe} alt="loupe" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleArtistSearch: PropTypes.func.isRequired
};

export default SearchBar;
