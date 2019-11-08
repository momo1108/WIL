import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [bool, setBool] = useState({
    first: true,
    second: false
  });
  const handleChange = name => event => {
    console.log(name)
    console.log(event.target.value)
    setBool({
      ...bool,
      [name]: event.target.value
    })
  }
  let yes = '<h1>yes</h1>'
  let no = '<h1>no</h1>'
  console.log(bool)
  return (
    <div className="App">
      <label className="hiro" htmlFor="fora">
      <input type='radio' id="fora" name='hi' value={true} onChange={handleChange('first')} checked={bool.first}/>
      </label>
      <label className="hiro" htmlFor="forb">
      <input type='radio' id="forb" name='hi' value={false} onChange={handleChange('first')} checked={bool.first}/>
      </label>
      <label className="hiro" htmlFor="forc">
      <input type='radio' id="forc" name='hi' value={false} onChange={handleChange('first')} chedcked={bool.first}/>
      </label>
      <label className="hiro" htmlFor="ford">
      <input type='radio' id="ford" name='hi' value={false} onChange={handleChange('first')} checked={bool.first}/>
      </label>
      {bool.first? yes:no}
    </div>
  );
}

export default App;
