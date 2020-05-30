import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { setupMaster } from "cluster";

function App() {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {console.log('sum is',sum(2,4))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
