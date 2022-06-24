import React, { Component } from "react";
import "./Navbar.css";
import Logo from "./Logo.js";
// import moviegurulogo from "./moviegurulogo.png";

class Navbar extends Component {
  //our react codes goes in here
  render() {
    return (
      <nav class="nav">
        <div class="nav-logo">
          <Logo />
        </div>
        <ul class="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#!/pick-for-me">Pick For Me</a>
          </li>
          <li>
            <a href="/#!/news">News</a>
          </li>
          <li>
            <a href="/#!/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
