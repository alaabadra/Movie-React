import React from "react";
import "./styleNavbar.css";
import {NavLink} from "react-router-dom";
const navBar = () => (
    <nav className="navbar">
        <NavLink className="navbar-brand" to="/">
        Home Page
        </NavLink>
        <div className="navbar-collapse">
      <ul className="navbar-ul">
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href='movielist' to="/movie-list">
            Movie List
          </NavLink>
        </li>
      </ul>
    </div>
    </nav>

);
export default navBar; 