import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useTranslation, initReactI18next } from 'react-i18next'
import Header from './Header'
function LandingPage () {
  const { t } = useTranslation()

  const navigate = useNavigate()
  return (
    <div>
    <Header></Header>
      <div className='landing-page'>
        <h1>{t('landh')}
        </h1>
        <hr />
        <input
          name='login'
          type='button'
          value={t('Login')}
          onClick={() => navigate('/login', { replace: true })}
        ></input>
        <hr />
        <input
          name='signup'
          type='button'
          value={t('Signup')}
          onClick={() => navigate('/signup', { replace: true })}
        ></input>
      </div>
      <Footer />
    </div>
  )
}
export default LandingPage
