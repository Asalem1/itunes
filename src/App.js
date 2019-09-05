import React, { Component } from 'react';
import './App.css';
import SearchResultsList from './SearchResultsList';
import SearchKind from './SearchKind';

class App extends Component {
  state = {
    favorites: [],
    search_text: '',
    search_results: [],
  }

  handleChange = (event) => {
    this.setState({ search_text: event.target.value })
  }

  handleSearchClick = async () => {
    const { search_text } = this.state;
    const medias = [
      'movie',
      'podcast',
      'music',
      'musicVideo',
      'audioBook',
      'shortFilm',
      'tvShow',
      'software',
      'ebook',
    ];

    const results = [];

    let i = 0;

    while (i < medias.length) {
      const media = medias[i];
      await fetch(`https://itunes.apple.com/search?term=${search_text}&media=${media}`)
        .then(res => res.json())
        .then((res) => {
          if (res.results && res.results.length > 0) {
            results.push({
              [media]: res.results
            })
          }
        })
        .catch((err) => console.error('there was an error in your search'))
        .then(() => i++);
    }
    this.setState({ search_results: results });
  }

  handleFavorite = (favorite) => {
    let { favorites } = this.state;
    const index = favorites.findIndex((fav) => `${fav.trackId}` === `${favorite.trackId}`);
    console.log('index: ', index);
    if (index === -1) {
      favorites.unshift(favorite);
    } else {
      favorites.splice(index, 1);
    }
    this.setState({ favorites });
  }

  render() {
    const { favorites, search_text, search_results } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Itunes Search: <input type="text" value={search_text} onChange={this.handleChange} />
            <button
              onClick={() => this.handleSearchClick()}
              disabled={search_text.length === 0}
            >
              Search
            </button>
          </p>
          {favorites
            && favorites.length > 0
            && (
              <div>
                <div className="title">Favorites</div>
                <SearchKind handleFavorite={this.handleFavorite} list={favorites} favorites={favorites} />
              </div>

          )}
          <div>
            <SearchResultsList
              handleFavorite={this.handleFavorite}
              favorites={favorites}
              search_results={search_results}
            />
          </div>
        </header>
      </div>
    );
  }
}


export default App;
