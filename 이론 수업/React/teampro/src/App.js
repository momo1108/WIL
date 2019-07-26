import React from 'react';
import logo from './logo.svg';
import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Body />
    </HashRouter>
  );
}

export default App;
