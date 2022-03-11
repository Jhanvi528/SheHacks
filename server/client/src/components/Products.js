import React from 'react'
import Card from './Card.js'
import HOMEDECOR from '../images/HOMEDECOR.jpg'
import FURNISHING from '../images/FURNISHING.jpg'
import ACCESSORIES from '../images/ACCESSORIES.jpg'
import CLOTHES from '../images/CLOTHES.jpg'
import { Link } from 'react-router-dom'

function Products () {
  return (
    <div className='products' id='products-section'>
      <h1 style={{ marginLeft: '4.5%', paddingBottom: '3%' }}>Our Products</h1>
      <Link to='product'>
        <Card img={HOMEDECOR} product='HOMEDECOR' />
      </Link>
      <Link to='product'>
        <Card img={FURNISHING} product='FURNISHING' />
      </Link>
      <Link to='product'>
        <Card img={ACCESSORIES} product='ACCESSORIES' />
      </Link>
      <Link to='product'>
        <Card img={CLOTHES} product='CLOTHES' />
      </Link>
    </div>
  )
}
export default Products
