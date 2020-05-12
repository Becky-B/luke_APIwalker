import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import People from './components/People';
import Planet from './components/Planets';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <People/>
    </div>
  );
}

export default App;
