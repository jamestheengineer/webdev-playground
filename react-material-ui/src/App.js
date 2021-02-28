import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Demo from './components/Demo'
import { Viewer } from "resium";

class App extends Component {
  render() {
    return (
      <div>
        <Viewer />
      </div>
    )
  }
}
export default App