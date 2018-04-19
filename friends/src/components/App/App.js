import React, { Component } from "react"
import Friends from "../Friends"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends greet="hello" />
      </div>
    )
  }
}

export default App
