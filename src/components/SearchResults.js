import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({match}) => {
  return(
    <PhotoContainer topic = {match.params.topic}/>
  );
}

export default SearchResults;
