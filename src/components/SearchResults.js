// import React from 'react';
// import PhotoContainer from './PhotoContainer';
//
// const SearchResults = ({match}) => {
//   return(
//     <PhotoContainer topic = {match.params.topic}/>
//   );
// }
//
// export default SearchResults;


import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({match}) => {


  return(

    <PhotoContainer title='Search Results' topic={match.params.topic} />
  );
}

export default SearchResults;
