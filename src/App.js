import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import header from "./components/header"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <header />
      <Home />
    </div>
  );
}

export default App;
