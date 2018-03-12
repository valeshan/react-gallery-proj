import React from 'react';
import {Grid} from 'react-bootstrap';



const Dogs = props =>{
  return (
    <div>
      <Grid>
        <div className="photo">
          <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
        </div>
        <div className="photo">
          <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
        </div>
      </Grid>
    </div>
  )
}

export default Dogs;
