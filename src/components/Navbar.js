import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
        <h1><NavLink to="/" exact>Open Library</NavLink></h1>
        <h1><NavLink to="/books" exact>Books</NavLink></h1>
        <h1><NavLink to="/addbook" exact>Add a Book</NavLink></h1>
    </div>
  )
}

export default Navbar;