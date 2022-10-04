import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import axios from "axios";
import Users from "./users/users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    //disableing the loading spinner passing the prop
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        {/* {loading ? <h4>...loading</h4> : <h1>Hello {showName && name}</h1>} */}
        <Navbar icon="fa fa-github" title="GitHuB Finder" />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
