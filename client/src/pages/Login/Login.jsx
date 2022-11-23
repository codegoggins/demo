import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className="container">
            <form className='loginForm'>
                <label>Username</label>
                <input type="text" placeholder='Enter username' />
                <label>Password</label>
                <input type="text" placeholder='Enter password' />
                <button className='loginButton'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login