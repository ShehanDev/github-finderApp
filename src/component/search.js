import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlt: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    //target the element of the page and update the state
    this.setState({ [e.target.name]: e.target.value });
    console.log("handleOn change");
  };

  //submit function
  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text == null) {
      this.props.setAlt("Please enter the Name", "light");
    } else {
      this.props.searchUsers(this.state.text);
      //pass the data to app componet to filter the result react does not allow the it (child to parent props passing )
      //pass the state as prop
      //clear the input area
      this.setState({ text: "" });
    }
  };

  //clear users
  clearUsers = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      //search component
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            name="text"
            type="text"
            placeholder="search user name .."
            value={this.state.text}
            onChange={this.handleChange}
          ></input>

          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {console.log(this.props.showClear)}

        {this.props.showClear && (
          <button
            className="btn btbtn btn-light btn-block"
            onClick={this.clearUsers}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
