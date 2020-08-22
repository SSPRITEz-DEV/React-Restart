import React, { Component } from 'react';
import UserSearch from './components/UserSearch';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Web Application</h1>
      <UserSearch limitation={10} username={'SSPRITE'}></UserSearch>
    </div>
  );
}

export default App;
