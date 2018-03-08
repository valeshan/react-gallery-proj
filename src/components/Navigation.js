import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';



const Navigation = props =>{
  return (
    <Nav  className="main-nav">
        <NavItem ><button className = "categoryComponent"><NavLink to="/search/cats">Cats</NavLink></button></NavItem>
        <NavItem ><button className = "categoryComponent"><NavLink to="/search/dogs">Dogs</NavLink></button></NavItem>
        <NavItem ><button className = "categoryComponent"><NavLink to="/search/computers">Computers</NavLink></button></NavItem>
    </Nav>
  )
}

export default Navigation;
