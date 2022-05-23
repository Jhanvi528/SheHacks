import React from 'react'
import Card from './Card.js'
import grocery from '../images/grocery.jpg'
import accessories from '../images/accessories.jpg'
import electronic from '../images/electronic.jpg'
import clothes from '../images/clothes.jpg'
import { Link } from 'react-router-dom'
import { useTranslation, initReactI18next } from 'react-i18next'


function Products () {
  const { t } = useTranslation()
  return (
    <div className='products' id='products-section'>
      <h1 style={{ marginLeft: '4.5%', paddingBottom: '3%' }}>
        {t('ourservices')}
      </h1>
      <Link to='grocery' >
        <Card img={grocery} product={t('GROCERY')} />
      </Link>
      <Link to='accessories'>
        <Card img={accessories} product={t('ACCESSORIES')} />
      </Link>
      <Link to='electronics'>
        <Card img={electronic} product={t('ELECTRONICS')} />
      </Link>
      <Link to='clothing'>
        <Card img={clothes} product={t('CLOTHING')} />
      </Link>
    </div>
  )
}
export default Products
