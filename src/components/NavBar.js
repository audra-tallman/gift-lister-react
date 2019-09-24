import React from 'react';
import { NavLink } from 'react-router-dom';

var styles ={
  color:'white',
  backgroundColor:'teal',
  fontWeight:'bold',
  padding:10,
};

const NavBar = () => {
  return (
    <div className="navbar" style={styles}>
        <NavLink to="/About" activeStyle={{color: "white"}}>About</NavLink><br/>
        <NavLink to="/people" activeStyle={{color: "white"}}>People</NavLink><br/>
        <NavLink to="/gifts"activeStyle={{color: "white"}}>Shopping List</NavLink><br/>
    </div>
  );
};

export default NavBar;
