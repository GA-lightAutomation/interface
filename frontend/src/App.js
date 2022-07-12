import './App.css';
import React from 'react';
import Bulb from './components/bulb';
import Navbar from './components/nav';

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Bulb/>
    </React.Fragment>
  );
}

export default App;
