import React from 'react';
import './styling/NavBar.css';

const NavBar = () => {
  return (
    <>
    {/*basic layout:*/}
    <header className='nav-box'>
      {/* <img className='logo' src="img/logo.jpg" alt="logo"></img> */}
      <nav className="navigation">
        <ul class="nav_links">
          <li><a href="#">Admission</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Notices</a></li>
        </ul>
      </nav>
      <a class="roles" href="#"><button>Admin</button></a>
    </header>
    </>
  )
}

export default NavBar
