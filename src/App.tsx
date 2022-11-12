import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import DashboardPage from './components/DashboardPage';

function App() {
  return (<>
    <Link to='/dashboard'>dashboard page</Link>
    <Link to='/' style={{marginLeft: '50px'}}>login page</Link>
    <Routes>
      <Route path='/' element={ <LoginPage />} />
      <Route path='/dashboard' element={ <DashboardPage />} />
    </Routes>
    </>);
}

export default App;
