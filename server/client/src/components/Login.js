import React, { useState } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

function Login ({ loginUser }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  function handleChange (e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const loginDataSend = () => {
    axios.post('/login', user).then(res => {
      alert(res.data.message)
      loginUser(res.data.user)
      navigate('/login', { replace: true })
    })
  }

  return (
    <div className='login container'>
      <h1>Login</h1>
      <span>
        Don't have an account?
        <Link to='/signup'> Sign Up</Link>
      </span>

      <form method='post'>
        <hr />
        <input
          type='email'
          name='email'
          value={user.email}
          placeholder='Enter your email'
          onChange={handleChange}
        />
        <hr />
        <input
          type='password'
          name='password'
          value={user.password}
          placeholder='Enter your password'
          onChange={handleChange}
        />
        <hr />
        <input type='button' onClick={loginDataSend} value='Login'></input>
      </form>
    </div>
  )
}
export default Login
