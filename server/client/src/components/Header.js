import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header () {
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
            <h1>Shop Easy</h1>
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

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav '>
            <li className='nav-item '>
              <Link to='/'>
                <a className='nav-link' href='#home-section'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#aboutUs-section'>
                About us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#products-section'>
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact-section'>
                Contact us
              </a>
            </li>
            {isLogin && (
              <li className='nav-item'>
                <a className='nav-link' href='/shopkeeper'>
                  Add Item
                </a>
              </li>
            )}
          </ul>

          <form className='form-inline my-2 my-lg-0'>
            {isLogin ? (
              <Link to={'/'}>
                <button
                  className='btn1'
                  type='submit'
            
                  onClick={logout}
                >
                  LOGOUT
                </button>
              </Link>
            ) : (
              <Link to={'/landingpage'}>
                <button
                  className='btn1'
                  type='submit'
                
                >
                  LOGIN
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
