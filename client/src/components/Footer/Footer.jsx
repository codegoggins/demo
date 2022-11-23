import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-container">
              <div className='footer-logo'>
                  <h1 className='h1'>
                      <Link to='/' style={{font:"inherit"}}>
                         hostell
                      </Link>
                  </h1>
              </div>
              <div className='footer-copyright'>
                @ Copyright NILAY SINGH 2022
              </div>
         </div>
    </div>
  )
}

export default Footer