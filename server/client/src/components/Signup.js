import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
function Signup () {
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
  function signupDataSend () {
    const { email, password } = user
    if (email && password) {
      axios.post('/signup', user).then(res => {
        if (res.data === 1) {
          localStorage.setItem('user', user.email)
        }

        navigate('/', { replace: true })
      })
    } else {
      alert('Please enter all credentials')
    }
  }

  return (
    <div>
      <div className='signup-container'>
        <h1>Signup</h1>

        <span>
          Already have an account?
          <Link to='/login'>Login</Link>
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
          <input
            type='button'
            onClick={signupDataSend}
            value='Sign up'
            name='signup'
          ></input>
        </form>
      </div>
      <Footer />
    </div>
  )
}
export default Signup
