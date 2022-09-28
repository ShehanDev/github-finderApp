import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    const name = "jhon doe ";
    const loading = false;
    const showName = true;
    return (
      <div className="App">
        <h1>App component</h1>
        {loading ? <h4>...loading</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
