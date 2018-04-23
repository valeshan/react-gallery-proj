import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem, Button} from 'react-bootstrap';
import Search from './Search';



const Navigation = props =>{
  return (
    <div>
      <Search />
      <Nav  className="main-nav">
          <NavItem ><NavLink className = "link-style" to="/cats"><Button bsStyle = "primary" className = "categoryComponent">Cats</Button></NavLink></NavItem>
          <NavItem ><NavLink className = "link-style" to="/dogs"><Button bsStyle = "primary" className = "categoryComponent">Dogs</Button></NavLink></NavItem>
          <NavItem ><NavLink className = "link-style" to="/balloons"><Button bsStyle = "primary" className = "categoryComponent">Balloons</Button></NavLink></NavItem>
      </Nav>
    </div>
  )
}

export default Navigation;
