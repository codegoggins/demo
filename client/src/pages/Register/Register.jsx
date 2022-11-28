import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='register'>
        <div className="register-container">
            <div className='register-img'>
            <img src="https://images.pexels.com/photos/305816/pexels-photo-305816.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div className='register-form'>
            <span>Register</span>
            <form>
                <label>Username</label>
                <input type="text" placeholder='Enter username' />
                <label>Password</label>
                <input type="password" placeholder='Enter password' />
                <label>Email</label>
                <input type="text" placeholder='Enter email' />
                <button className='register-button'>Register</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register