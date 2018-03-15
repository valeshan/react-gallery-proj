import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid} from 'react-bootstrap';

import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

//LinkComponents
import Cats from './components/LinkComponents/Cats';
import Dogs from './components/LinkComponents/Dogs';
import Computers from './components/LinkComponents/Computers';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Grid>
            <Route path = "/search" render ={()=><Search />} />
            <Navigation />
          </Grid>
          <h2 className= "results-title">Results</h2>
            <Switch>
              <Route path = "/search/:topic" render = {()=> <SearchResults />} />
              <Route path = "/search/cats" render ={()=><Cats />} />
              <Route path = "/search/dogs" render ={()=><Dogs />} />
              <Route path = "/search/computers" render ={()=><Computers />} />
              <Route component = {NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
