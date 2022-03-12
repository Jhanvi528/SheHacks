import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
function LandingPage () {
  const navigate = useNavigate()
  return (
    <div>
      <div className='landing-page'>
        <h1>Hello!! What are you looking for?</h1>
        <hr />
        <input
          name='login'
          type='button'
          value='Login'
          onClick={() => navigate('/login', { replace: true })}
        ></input>
        <hr />
        <input
          name='signup'
          type='button'
          value='Signup'
          onClick={() => navigate('/signup', { replace: true })}
        ></input>
      </div>
      <Footer />
    </div>
  )
}
export default LandingPage
