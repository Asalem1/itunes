import React from 'react';
import './SearchResult.css';

const SearchResultRow = ({ favorites, handleFavorite, result }) => (
  <div className="row">
    <div className="inline">
      <img
        src={result.artworkUrl60 || ''}
        alt="img"
      />
    </div>
    <div className="inline">
      {`${result.artistName} - ${result.trackName}`}
    </div>
    <div className="inline">
      {result.primaryGenreName}
    </div>
    <div className="inline">
      <a href={result.trackViewUrl}>
        {result.trackViewUrl}
      </a>
    </div>
    <div className="inline">
      <button onClick={() => handleFavorite(result)}>
        {favorites.findIndex(fav => `${fav.trackId}` === `${result.trackId}`) === -1 ? 'Favorite' : 'Unfavorite'}
      </button>
    </div>
  </div>
);

export default SearchResultRow;
