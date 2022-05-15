import React from 'react'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div className='shopkeeper-section'>
      <form method='post' onSubmit={handleSubmit} enctype='multipart/form-data'>
        <h1>Enter Details</h1>
        <label>Enter Shopkeeper Name: </label>
        <input
          type='text'
          name='name'
          value={shopkeep.name}
          placeholder='Enter Shopkeeper Name'
          onChange={handleChange}
          required={true}
        />
        <br />
        <label>Enter Location: </label>
        <input
          type='text'
          name='location'
          value={shopkeep.location}
          placeholder='Enter Shopkeeper location'
          onChange={handleChange}
          required={true}
        />
        <br />
        <label>Enter Item Name:</label>
        <input
          type='text'
          name='item'
          value={shopkeep.item}
          placeholder='Enter Item Name'
          onChange={handleChange}
          required={true}
        />
        <br />
        <label>Enter Price Name:</label>
        <input
          type='integer'
          name='price'
          value={shopkeep.price}
          placeholder='Enter price'
          onChange={handleChange}
          required={true}
        />
        <br />
        <label>Enter Category:</label>

        <select name='cat' id='cat' onChange={handleChange}>
          <option value='grocery'>Grocery</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='accessories'>Accessories</option>
        </select>
        <br />
        <label>Enter Description Name:</label>
        <input
          type='text'
          name='desc'
          value={shopkeep.desc}
          placeholder='Enter Description'
          onChange={handleChange}
          required={true}
        />
        <br />
        <label>Enter Image URL:</label>
        <input type='text' name='img' onChange={handleChange} required={true} />
        <br />
        <button
          className='btn btn-dark'
          type='submit'
          style={{ backgroundColor: '#1c0c5b' }}
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

export default ShopKeeper
