import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>      
       <ul> 
       <li><img src="https://i.ibb.co/tYVRnCK/Logo.png" alt=""/></li>   
       <li><button>Login</button></li>    
        <li><a href="#news">News</a></li>
        <li><a href="/home">Destinationa</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li> 
         
      </ul>
    </div>
  );
};

export default Header;