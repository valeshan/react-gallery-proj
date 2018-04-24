import React from 'react';
import PhotoContainer from './PhotoContainer';
import Search from './Search';

const SearchResults = ({match}) => {
  return(
    <div>
      <Search />
      <PhotoContainer title={match.params.topic} topic ={match.params.topic}/>
    </div>
  );
}

export default SearchResults;
