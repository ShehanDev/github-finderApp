import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import axios from "axios";
import Users from "./users/users";
import Search from "./component/search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}"
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    console.log(text);
    const res = await axios.get(
      "https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}"
    );
    this.setState({ users: res.data, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar icon="fa fa-github" title="GitHuB Finder" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
        </div>
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
