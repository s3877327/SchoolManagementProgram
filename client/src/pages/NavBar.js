import React from 'react';
import '../components/AddStudent/styling/NavBar.css';
import { Outlet } from 'react-router-dom';

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
      <a class="roles" href="#"><button>Acc-type</button></a>
    </header>

    <Outlet />
    </>
  )
}

export default NavBar
