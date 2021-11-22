import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Breadcrumb from './components/Breadcrumb';
import { Navbar } from './components/Navbar';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Box paddingTop={'70px'}>
          <Breadcrumb/>
          <AppRouter />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
