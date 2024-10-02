// Header.js
import React from 'react';
import '../App.css';  
import CusstomButton from './CusstomButton';

const Header = ({ handleinput, isLoggedIn, handleLogout }) => {
  return (
    <div className='header'>
      <h1>Task Management App</h1>
      {isLoggedIn && (
        <div className='btnwraper'>
          <CusstomButton click={handleinput} name='Add Task' bg='#1877f2' color='white' />
          <CusstomButton click={handleLogout} name='Logout' bg='red' color='white' />
        </div>
      )}
    </div>
  );
}

export default Header;
