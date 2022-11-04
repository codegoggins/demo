import React from 'react'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
        <h1>ho<span>s</span>t<span>ell</span></h1>
        </div>
        <div className='center'>
            <ul className='center-list'>
                <li className='center-list-item'>Home</li>
                <li className='center-list-item'>About</li> 
                <li className='center-list-item'>Sell</li> 
            </ul>
        </div>
        <div className='right'>
            <button className='btn'>Register</button>
            <button className='btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar