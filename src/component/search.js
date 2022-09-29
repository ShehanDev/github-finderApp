import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", name: "" };
  }

  handleChange = (e) => {
    //target the element of the page and update the state
    this.setState({ [e.target.name]: e.target.value });
    console.log("handleOn change");
  };
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
    //pass the data to app componet to filter the result react does not allow the it (child to parent props passing )
    //pass the state as prop
    this.props.searchUsers(this.setState.text);
  }

  render() {
    return (
      //search component
      <div>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
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
      </div>
    );
  }
}

export default Search;
