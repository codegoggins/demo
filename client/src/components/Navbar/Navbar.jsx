import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <div className='left'>
            <h1 className='h1'>hostell</h1>
            </div>
            <div className='center'>
                <ul className='center-list'>
                    <li className='center-list-item'>
                    <Link to='/'>
                        Home
                    </Link>
                    </li> 
                    <li className='center-list-item'>
                    <Link to='/items/sell'>
                        Sell
                    </Link>
                    </li> 
                    <li className='center-list-item'>
                    <Link to='/items'>
                        Items
                    </Link>
                    </li> 
                </ul>
            </div>
            <div className='right'>
                <button className='btn'>
                   <Link to='/register'>
                   Register
                    </Link>
                </button>
                <button className='btn'>
                   <Link to='/login'>
                   Login
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}
 
export default Navbar