import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';
import AppBar from './components/AppBar'; 

function App() {
  return (<>
  <AppBar />
    <Routes>
      <Route path='/' element={ <LoginPage />} />
      <Route path='/dashboard' element={ <DashboardPage />} />
    </Routes>
    </>);
}

export default App;
