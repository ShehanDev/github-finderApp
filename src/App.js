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
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_Serect=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT}`
    );
    //disableing the loading spinner passing the prop
    this.setState({ users: res.data, loading: false });
  }

  //serach users
  searchUser = async (name) => {
    this.setState({ loading: true });
    console.log(name);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_Serect=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT}`
    );
    //disableing the loading spinner passing the prop
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        {/* {loading ? <h4>...loading</h4> : <h1>Hello {showName && name}</h1>} */}
        <Navbar icon="fa fa-github" title="GitHuB Finder" />

        <div className="container">
          <Search searchUser={this.searchUser} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
