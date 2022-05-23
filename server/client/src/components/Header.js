import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import tEn from '../locales/en/translation.json'
import thindi from '../locales/tHindi/translation.json'
import { useEffect } from 'react'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: tEn
    },

    de: {
      translation: thindi
    }
  },
  lng: 'de',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
})
function ChangeVal (l) {
  return () => {
    i18n.changeLanguage(l)
    localStorage.setItem('lang', l)
  }
}

function Header () {
  const { t } = useTranslation()
  useEffect(() => {
    var currentLang = localStorage.getItem('lang')
    i18n.changeLanguage(currentLang)
  }, [])

  const [isLogin, setIsLogin] = React.useState(false)
  const navigate = useNavigate()
  React.useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin () {
    if (localStorage.getItem('user') === null) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }

  function logout () {
    localStorage.removeItem('user')
    checkLogin()
    navigate('/', { replace: true })
  }

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand'>
          <img className='logo' src={logo} />
          <div style={{ marginBottom: '0', display: 'inline' }}>
            <h1>{t('ShopEasy')}</h1>
          </div>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <button onClick={ChangeVal('en')} className='btn1'  style={{marginRight:'2%'}}>English</button> 
        <button onClick={ChangeVal('de')} className='btn1' >{t('Hindi')}</button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav '>
            <li className='nav-item '>
              <Link to='/'>
                <a className='nav-link' href='#home-section'>
                  {t('Home')} <span className='sr-only'>(current)</span>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#aboutUs-section'>
                {t('aboutus')}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#products-section'>
                {t('Products')}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact-section'>
                {t('ContactUs')}
              </a>
            </li>
            {isLogin && (
              <li className='nav-item'>
                <a className='nav-link' href='/shopkeeper'>
                  {t('AddItem')}
                </a>
              </li>
            )}
          </ul>

          <form className='form-inline my-2 my-lg-0'>
            {isLogin ? (
              <Link to={'/'}>
                <button className='btn1' type='submit' onClick={logout}>
                  {t('LOGOUT')}
                </button>
              </Link>
            ) : (
              <Link to={'/landingpage'}>
                <button className='btn1' type='submit'>
                  {t('LOGIN')}
                </button>
              </Link>
            )}
          </form>
        </div>
      </nav>
    </header>
  )
}
export default Header
