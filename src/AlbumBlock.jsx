import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './Albums.css';

const AlbumBlock = ({ album }) => {
  const divStyle = {
    backgroundImage:
      'url(' + album.artworkUrl100.replace(/(100x100bb)/g, '500x500bb') + ')'
  };
  console.log(album.collectionCensoredName);
  return (
    <div className="album-block" style={divStyle}>
      <div className="album-overlay" />
      <div className="album-info">{album.collectionCensoredName}</div>
    </div>
  );
};

AlbumBlock.propTypes = {
  album: PropTypes.object.isRequired
};

export default AlbumBlock;
