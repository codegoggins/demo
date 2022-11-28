import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-container">
            <div className='login-img'>
            <img src="https://images.pexels.com/photos/721287/pexels-photo-721287.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div className='login-form'>
            <span>Sign In</span>
            <form>
                <label>Username</label>
                <input type="text" placeholder='Enter username' />
                <label>Password</label>
                <input type="password" placeholder='Enter password' />
                <button className='loginButton'>Login</button>
                <button className='registerButton'>
                <Link to='/register'>
                Register
                </Link>
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login