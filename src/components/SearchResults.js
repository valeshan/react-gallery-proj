import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({match}) => {
  return(
    <PhotoContainer title={match.params.topic} topic ={match.params.topic}/>
  );
}

export default SearchResults;
