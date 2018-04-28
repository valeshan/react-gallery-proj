import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';




const Navigation = props =>{
  return (
    <div className = 'main-nav'>
          <NavLink className = "link-style" to="/cats"><Button bsStyle = "primary" className = "categoryComponent">Cats</Button></NavLink>
          <NavLink className = "link-style" to="/dogs"><Button bsStyle = "primary" className = "categoryComponent">Dogs</Button></NavLink>
          <NavLink className = "link-style" to="/balloons"><Button bsStyle = "primary" className = "categoryComponent">Balloons</Button></NavLink>
          <NavLink className = "link-style" to="/search"><Button bsStyle = "primary" className = "categoryComponent">Search</Button></NavLink>
    </div>
  )
}

export default Navigation;
