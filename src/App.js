import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserBoard from './components/UserBoard'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <main>
          <UserBoard />
        </main>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
      </header>
    </div>
  );
}

export default App;
