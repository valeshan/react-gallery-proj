import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';

import apiKey from '../config/Config';

const apikey = apiKey;

export default class PhotoContainer extends Component {

  constructor(props){
    super(props);
    this.state ={
      images :[],
      loading: true,
      topic: this.props.topic
    }
  }

  componentDidMount(){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${this.state.topic}&per_page=24&format=json&nojsoncallback=1`)
    .then(response=>{
      this.setState({
        images: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error =>{
      <h2> Error {error} </h2>
    });
  }

  render(){
    return(
      <div className="photo-container">
          {
            (this.state.loading)
            ? <p>Data is loading...</p>
            : <PhotoList data={this.state.images}/>
          }
      </div>
    );
  }
}
