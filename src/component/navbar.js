import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  state = {};
  static defaultProps = {
    title: "Github finder",
    icon: "fa fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          {/* //getting the props details  */}
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
