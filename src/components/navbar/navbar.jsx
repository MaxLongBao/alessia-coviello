import React from 'react';
import { Link } from 'gatsby';
import "./navbar.css";

const Navbar = ({ location }) => {
  console.log(location)
  return (
    <div className="navbar">
      <h3><Link to='/'>Home</Link></h3>
      <h3><Link to='/'>Chi sono</Link></h3>
      <h3><Link to='/'>Di cosa mi occupo</Link></h3>
      <h3><Link to='/'>Contatti</Link></h3>
    </div>
  );
}

export default Navbar;