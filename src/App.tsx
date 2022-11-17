import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';
import AppBar from './components/AppBar'; 
import TablePage from './components/TablePage';

function App() {
  return (<>
  <AppBar />
    <Routes>
      <Route path='/' element={ <LoginPage />} />
      <Route path='/dashboard' element={ <DashboardPage />} />
      <Route path='/table' element={ <TablePage />} />
    </Routes>
    </>);
}

export default App;
