import React from 'react';
import PropTypes from 'prop-types';
import AlbumBlock from './AlbumBlock';
import '../Albums.css';

const AlbumsContainer = ({ albums }) => {
  return (
    <div className="albums-container">
      {albums.map(album => (
        <AlbumBlock key={album.collectionId} album={album} />
      ))}
    </div>
  );
};

AlbumsContainer.propTypes = {
  albums: PropTypes.array.isRequired
};

export default AlbumsContainer;
