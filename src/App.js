import React, { Component } from 'react';
import Search from './components/Search';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import {BrowserRouter, Route} from 'react-router-dom';

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
          <Search />

          <Navigation />
          <div  className="photo-container">
            <h2>Results</h2>
            <Route path = "/search/cats" render ={()=><Cats />} />
            <Route path = "/search/dogs" render ={()=><Dogs />} />
            <Route path = "/search/computers" render ={()=><Computers />} />
            <ul>
              <li>
                <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
              </li>
              <li>
                <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
              </li>
              <li>
                <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
              </li>
              <li>
                <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
              </li>
            </ul>
            <NotFound />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
