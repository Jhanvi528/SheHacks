import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation, initReactI18next } from 'react-i18next'
import Header from './Header'
function ShopKeeper () {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = React.useState(false)

  const [shopkeep, setshopkeep] = React.useState({
    name: '',
    location: '',
    item: '',
    price: 0,
    cat: 'grocery',
    desc: '',
    img: ''
  })
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    console.log(value)
    setshopkeep({
      ...shopkeep,
      [name]: value
    })
  }

  function checkLogin () {
    if (localStorage.getItem('user') === null) {
      setIsLogin(false)
      navigate('/')
    } else {
      setIsLogin(true)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()

    fetch('/shopkeeper', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: shopkeep.name,
        location: shopkeep.location,
        item: shopkeep.item,
        price: shopkeep.price,
        cat: shopkeep.cat,
        desc: shopkeep.desc,
        img: shopkeep.img
      })
    })
      .then(response => response.json())
      .then(result => result.data)
      .catch(error => console.log(error))
    navigate('/')
  }

  React.useEffect(() => {
    checkLogin()
  }, [])
  const { t } = useTranslation()

  return (
    <>
      <Header></Header>
      <div className='shopkeeper-section'>
        <form
          method='post'
          onSubmit={handleSubmit}
          enctype='multipart/form-data'
        >
          <h1>{t('EnterDetails')}</h1>
          <label>{t('s1')}</label>
          <input
            type='text'
            name='name'
            value={shopkeep.name}
            placeholder='Enter Shopkeeper Name'
            onChange={handleChange}
            required={true}
          />
          <br />
          <label>{t('s2')} </label>
          <input
            type='text'
            name='location'
            value={shopkeep.location}
            placeholder='Enter Shopkeeper location'
            onChange={handleChange}
            required={true}
          />
          <br />
          <label>{t('s3')}</label>
          <input
            type='text'
            name='item'
            value={shopkeep.item}
            placeholder='Enter Item Name'
            onChange={handleChange}
            required={true}
          />
          <br />
          <label>{t('s4')}</label>
          <input
            type='integer'
            name='price'
            value={shopkeep.price}
            placeholder='Enter price'
            onChange={handleChange}
            required={true}
          />
          <br />
          <label>{t('s5')}</label>

          <select name='cat' id='cat' onChange={handleChange}>
            <option value='grocery'>{t('GROCERY')}</option>
            <option value='electronics'>{t('ELECTRONICS')}</option>
            <option value='clothing'>{t('CLOTHING')}</option>
            <option value='accessories'>{t('ACCESSORIES')}</option>
          </select>
          <br />
          <label>{t('s6')}</label>
          <input
            type='text'
            name='desc'
            value={shopkeep.desc}
            placeholder='Enter Description'
            onChange={handleChange}
            required={true}
          />
          <br />
          <label>{t('s7')}</label>
          <input
            type='text'
            name='img'
            onChange={handleChange}
            required={true}
          />
          <br />
          <button
            className='btn btn-dark'
            type='submit'
            style={{ backgroundColor: '#1c0c5b' }}
          >
            {t('AddItem')}
          </button>
        </form>
      </div>
    </>
  )
}

export default ShopKeeper
