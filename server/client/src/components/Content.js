import React from 'react'
import UpperSlide from './UpperSlides.js'
import AboutUs from './AboutUs.js'
import Products from './Products.js'
import { Link } from 'react-router-dom'
function Content () {
  return (
    <div id='content'>
      <UpperSlide />
      <Products />
      <AboutUs />
    
    </div>
  )
}

export default Content
