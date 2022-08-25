import  { React, Fragment } from 'react'
import '../components/AddStudent/styling/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <Fragment>
      <div className="nav bg-light d-flex justify-content-between">
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/login'>Login</Link>
        <Link className='nav-link' to='/register'>Register</Link>
      </div>
    </Fragment>
    </>
  )
}

export default NavBar
