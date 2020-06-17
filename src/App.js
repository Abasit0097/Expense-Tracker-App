import React from 'react';
import './App.css';
import Header from './Components/Header';
import NetAmount from './Components/NetAmount';
import {Nature} from './Components/Nature';
import {History} from './Components/History';
import { AddTransaction } from './Components/AddTransaction';



function App() {
  return (
    <div>
      <Header/>
      <div className="container">
      <NetAmount/>
      <Nature/>
      <History/>
      <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
