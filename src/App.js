import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './authentication/domain/User';
import { Bank } from './forex/domain/Bank';

function App() {
  let user1 = new User("pera", "Petar", "Petrovic");
  let user2 = new User("sima", "Sima", "Simic");
  let bank = new Bank();
  bank.createAccount(user1);
  bank.createAccount(user2);
  console.log(bank);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
