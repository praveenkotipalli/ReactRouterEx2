import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import reactlogo from "../img/reactlogo.png"
// import reactlogo1 from "../img/react1logo-removebg-preview.png"
const Navbar = () => {
  return (
    <nav className='navWrapper'>
        <div>
            <Link to="/">
                <img className="logo" src={reactlogo} alt="logo"/>
            </Link>
        </div>
        <ul className='navigasyonWrapper'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/personnel">Personnel</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="paths">Paths</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar