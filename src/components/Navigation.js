import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem, Button} from 'react-bootstrap';



const Navigation = props =>{
  return (
    <Nav  className="main-nav">
        <NavItem ><NavLink className = "link-style" to="/search/cats"><Button bsStyle = "primary" className = "categoryComponent">Cats</Button></NavLink></NavItem>
        <NavItem ><NavLink className = "link-style" to="/search/dogs"><Button bsStyle = "primary" className = "categoryComponent">Dogs</Button></NavLink></NavItem>
        <NavItem ><NavLink className = "link-style" to="/search/computers"><Button bsStyle = "primary" className = "categoryComponent">Computers</Button></NavLink></NavItem>
    </Nav>
  )
}

export default Navigation;
