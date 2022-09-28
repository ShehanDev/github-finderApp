import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Users from "./users/users";

class App extends Component {
  render() {
    // const name = "jhon doe ";
    // const loading = false;
    // const showName = true;
    return (
      <div className="App">
        {/* {loading ? <h4>...loading</h4> : <h1>Hello {showName && name}</h1>} */}
        <Navbar icon="fa fa-github" title="GitHuB Finder" />
        <div className="container">{/* <Users /> */}</div>
      </div>
    );
  }
}

export default App;
