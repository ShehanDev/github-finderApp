import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* //getting the props details  */}
        <i className={props.icon} />
        {props.title}
      </h1>
      <ul></ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github finder",
  icon: "fa fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
