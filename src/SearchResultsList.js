import React from 'react';
import SearchKind from './SearchKind';

const SearchResultsList = ({ handleFavorite, favorites, search_results }) => (
  <div>
    {Array.isArray(search_results)
      && search_results.length > 0
      && search_results.map((result) => {
        const [type] = Object.keys(result);
        return (
          <div key={type}>
            <div className="title">{type}</div>
            <SearchKind handleFavorite={handleFavorite} favorites={favorites} list={result[type]} />
          </div>
        );
      })}
  </div>
);

export default SearchResultsList
