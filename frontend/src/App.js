import './App.css';
import React from 'react';
import Light from './components/Light';
import Navbar from './components/Navbar'
import {appTheme} from './Theme/Theme'; 
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={appTheme}>
        <Navbar/> 
        <Light /> 
    </ThemeProvider>
  );
}

export default App;
