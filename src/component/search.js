import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  handleSubmit = (e) => {
    alert("An essay was submitted: " + this.state.text);
    e.preventDefault();
    console.log(this.state.text);
    this.props.searchUser(this.state.text);
    this.setState({ text: "" });
  };

  handleChange = (txt) => {
    this.setState({ text: txt.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            className="input"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-dark btn-block"
          />
        </form>
        <input type="bution" value="bution" className="alert  btn-block" />
      </div>
    );
  }
}

export default Search;
