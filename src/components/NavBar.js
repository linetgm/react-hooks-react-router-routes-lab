import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" >Movies</NavLink>
          </li>
          <li>
            <NavLink to="/directors">Directors</NavLink>
          </li>
          <li>
            <NavLink to="/actors">Actors </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;