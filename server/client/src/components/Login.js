import React, { useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import { useTranslation, initReactI18next } from 'react-i18next'
import Header from './Header'
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
      if (user.email != null) {
        loginUser(user.email)
        localStorage.setItem('user', user.email)
        navigate('/', { replace: true })
      } else {
        navigate('/signup', { replace: true })
      }
    })
  }

  const { t } = useTranslation()

  return (
    <div>
    <Header></Header>
      <div className='login-container'>
        <h1>{t('Login')}</h1>
        <span>
          {t('noacc')}
          <Link to='/signup'> {t('Signup')}</Link>
        </span>

        <form method='post'>
          <hr />
          <input
            type='email'
            name='email'
            value={user.email}
            placeholder={t('email')}
            onChange={handleChange}
          />
          <hr />
          <input
            type='password'
            name='password'
            value={user.password}
            placeholder={t('password')}
            onChange={handleChange}
          />
          <hr />
          <input
            type='button'
            onClick={loginDataSend}
            value={t('Login')}
          ></input>
        </form>
      </div>
      <Footer />
    </div>
  )
}
export default Login
