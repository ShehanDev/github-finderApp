import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import axios from "axios";
import Users from "./users/users";
import Search from "./component/search";
import About from "./component/pages/About.js";
import Alert from "./component/layouts/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alt: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    // eslint-disable-next-line
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ); // eslint-disable-line

    this.setState({ users: res.data, loading: false });
  }

  //search users
  searchUsers = async (text) => {
    console.log(text);
    // eslint-disable-next-line
    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
    console.log(this.state.users);
  };

  //clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //alert function
  setAlt = (msg, type) => {
    this.setState({ alt: { msg: msg, type: type } });
    // setTimeout = () => {
    //   this.setState({ alert: null }), 500;
    // };
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar icon="fa fa-github" title="GitHuB Finder" />
          <div className="container">
            <Alert alert={this.state.alt} />

            <Fragment>
              <Search
                searchUsers={this.searchUsers}
                setAlt={this.setAlt}
                showClear={this.state.users > 0 ? true : false}
                clearUsers={this.clearUsers}
              />
              <div className="container">
                <Users users={this.state.users} loading={this.state.loading} />
              </div>
            </Fragment>
            <Routes>
              <Route to="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
