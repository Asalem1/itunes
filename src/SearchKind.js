import React from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ handleFavorite, list, favorites }) => (
  <div>
    {Array.isArray(list)
      && list.length > 0
      && list.map(result => <SearchResult handleFavorite={handleFavorite} result={result} key={result.trackId} favorites={favorites} />)}
  </div>
);

export default SearchResultsList
