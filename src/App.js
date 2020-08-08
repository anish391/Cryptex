import React from 'react';
import BitcoinComparison from './BitcoinComparison';
import './App.css';

function App() {
  return (
    <div className="flag-app">
      <header className ="title-header">
        <h1 className="title-text">Cryptex</h1>
      </header>
      <BitcoinComparison />
    </div>
  );
}

export default App;
