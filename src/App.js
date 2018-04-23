import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid} from 'react-bootstrap';


import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

//LinkComponents
import Cats from './components/LinkComponents/Cats';
import Dogs from './components/LinkComponents/Dogs';
import Computers from './components/LinkComponents/Computers';
import Home from './components/LinkComponents/Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Grid>
            <Navigation />
          </Grid>
          <h2 className= "results-title">Results</h2>
            <Switch>
              <Route exact path = "/" component = {Home}  />
              <Route path = "/cats" component = {Cats} />
              <Route path = "/dogs" component = {Dogs} />
              <Route path = "/computers" component = {Computers} />
              <Route path = "/search/:topic" component = {SearchResults} />
              <Route component = {NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
