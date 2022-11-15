import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (

    <div className="App">
        <header className="App-header">
        <nav className='n-navbar'>
        <NavLink to="" activeclassname={'active'}>Home</NavLink> 
        <NavLink to="about" activeclassname={'active'}>About</NavLink>
        <NavLink to="memes" activeclassname={'active'}>Memes</NavLink>
        </nav>
        </header>
      </div>
    
  )
}

export default Navbar