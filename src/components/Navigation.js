import React from 'react';

  import {NavLink} from 'react-router-dom';



const Navigation = props =>{
  return (
    <nav  className="main-nav">
      <ul>
        <li ><button className = "categoryComponent"><NavLink to="/search/cats">Cats</NavLink></button></li>
        <li ><button className = "categoryComponent"><NavLink to="/search/dogs">Dogs</NavLink></button></li>
        <li ><button className = "categoryComponent"><NavLink to="/search/computers">Computers</NavLink></button></li>
      </ul>
    </nav>
  )
}

export default Navigation;
