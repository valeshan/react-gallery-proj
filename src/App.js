import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';

import Search from './components/Search';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';


//LinkComponents
import Cats from './components/LinkComponents/Cats';
import Dogs from './components/LinkComponents/Dogs';
import Computers from './components/LinkComponents/Computers';

class App extends Component {

  constructor(){
    super();
    this.state ={
      images :[]
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Grid>
            <Search />

            <Navigation />
          </Grid>
          <h2 className= "results-title">Results</h2>
          <div  className="photo-container">
            <Route path = "/search/cats" render ={()=><Cats />} />
            <Route path = "/search/dogs" render ={()=><Dogs />} />
            <Route path = "/search/computers" render ={()=><Computers />} />
            <ul>
              <Grid>
              </Grid>
            </ul>
            <NotFound />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
