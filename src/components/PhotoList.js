import React from 'react';
import Photo from './Photo';

const PhotoList = (props) =>{
    let images;
    const photos = props.data;
    if (photos.length > 0){
      images = photos.map(image => <Photo url = {`http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} /> )
    }
    return (
      <ul>
        {images}
      </ul>
    )
}


export default PhotoList;
