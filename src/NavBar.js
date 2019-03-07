import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav class="uk-navbar-container uk-margin" data-uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <NavLink to="/dashboard">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-task">View Task</NavLink>
            </li>
            <li>
              <NavLink to="/addtask">+Task</NavLink>
            </li>
            <li>
              <NavLink to="/geolocation">Map</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
