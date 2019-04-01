import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get('https://itprogerru-github-io.firebaseio.com/test.json').then(item=> {
      console.log(item)
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
