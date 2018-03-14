import React, { Component } from 'react';
import { fetchArtist } from './service';
import './App.css';
import SearchBar from './SearchBar';
import AlbumsContainer from './AlbumsContainer';

class App extends Component {
  state = {
    searchInput: '',
    albums: [],
    displayMessage:
      'Hey you, try entering your favourite artist in the top right search bar!'
  };

  handleInputChange = e => {
    const searchInput = e.target.value;
    this.setState({ searchInput });
  };

  handleArtistSearch = e => {
    fetchArtist(this.state.searchInput)
      .then(albums => {
        this.setState({ albums });
        if (albums.length === 0) {
          this.setState({
            displayMessage:
              'Oops, looks like the artist you entered does not exist!'
          });
        }
      })
      .catch(err =>
        this.setState({
          displayMessage:
            'Sorry, something went wrong, please come back and try again later!'
        })
      );
  };

  render() {
    return (
      <div className="App">
        <div className="landing-container">
          <SearchBar
            handleInputChange={this.handleInputChange}
            handleArtistSearch={this.handleArtistSearch}
          />
        </div>

        <span className="deco-line" />
        {this.state.albums.length === 0 && (
          <h2 className="intro">{this.state.displayMessage}</h2>
        )}
        <AlbumsContainer albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
