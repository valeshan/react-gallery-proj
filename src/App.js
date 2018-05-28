import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid} from 'react-bootstrap';


import apiKey from './config/Config';

import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

//LinkComponents
import Cats from './components/LinkComponents/Cats';
import Dogs from './components/LinkComponents/Dogs';
import Balloons from './components/LinkComponents/Balloons';
import Searchbar from './components/LinkComponents/Searchbar';
import Home from './components/LinkComponents/Home';

import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';
import axios from 'axios';

const apikey = apiKey;

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
      searchText: '',
      pics: [],
      loading: true,
      topic: this.props.topic
      }
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${this.state.topic}&per_page=32&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        return (
          <h3>Error fetching and parsing data { error }</h3>
        );
      });
  }

  onSearchChange = e =>{
    this.setState({
      searchText: e.target.value
    });
  }

  handleSearchSubmit = e =>{
    e.preventDefault();
    e.currentTarget.reset();
    let path =`/${this.state.searchText}`;
    this.props.history.replace(path);
  }



  render() {
    <PhotoContainer title = {this.state.topic} pics = {this.state.pics} loading = {this.state.loading} />

    return (
      <BrowserRouter>
        <div className="container">
          <Grid>
            <Navigation />
          </Grid>
              <Search handleSearchSubmit = {this.handleSearchSubmit} onSearchChange = {this.onSearchChange} />
            <Switch>
              <Route exact path = "/" component = {Home}  />
              <Route path = "/cats" component = {Cats} />
              <Route path = "/dogs" component = {Dogs} />
              <Route path = "/balloons" component = {Balloons} />
              <Route exact path = "/search" component = {Searchbar} />
              <Route path = "/:topic" component = {SearchResults} />
              <Route component = {NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
