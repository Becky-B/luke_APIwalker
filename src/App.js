import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import People from './components/People';
import Planet from './components/Planets';
import Form from './components/Form';

function App() {
  return (
    <div className="App container">
        <Form path="/"/>
      <Router>
        <People path ="/people/:id"/>
        <Planet path ="/planet/:id"/>
      </Router>
    </div>
  );
}

export default App;
