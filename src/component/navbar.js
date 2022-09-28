import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fa fa-github" />
          Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;
