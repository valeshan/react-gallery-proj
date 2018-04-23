import React from 'react';
import PhotoContainer from '../PhotoContainer';



const Dogs = props =>(
  <div>
    <h2 className= "results-title">Results</h2>
    <PhotoContainer topic = 'dogs' />
  </div>
)

export default Dogs;
