import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const [toggle,setToggle] = useState(false);  

  return (
    <div className='navbar'>
        <div className="nav-container">
            
            {/* TOGGLE NAV STARTS */}
            
            <ul className={`nav-toggle-list ${toggle && 'open'}`}>
                    <li className='toggle-list-item'>
                    <Link to='/'>
                        <h1 className='h1'>hostell</h1>
                    </Link>
                    </li>
                    <li className='toggle-list-item'>
                    <Link to='/'>
                        Home
                    </Link>
                    </li> 
                    <li className='toggle-list-item'>
                    <Link to='/items/sell'>
                        Sell
                    </Link>
                    </li> 
                    <li className='toggle-list-item'>
                    <Link to='/items'>
                        Items
                    </Link>
                    </li> 
                    <li className='toggle-list-item'>
                    <Link to='/login'>
                        Login
                    </Link>
                    </li> 
                    <li className='toggle-list-item'>
                    <Link to='/register'>
                        Register
                    </Link>
                    </li> 
            </ul>

            {/* TOGGLE NAV ENDS */}


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
            {/* TOGGLE BUTTONS */}
            <div className='nav-toggle' 
            onClick={()=>setToggle(!toggle)}
            >
                {toggle ? 
                (<i className="fa-sharp fa-solid fa-xmark close"></i>):(
                    <i className="fa-sharp fa-solid fa-bars"></i>
                )
                }
            </div>
        </div>
    </div>
  );
}

export default Navbar