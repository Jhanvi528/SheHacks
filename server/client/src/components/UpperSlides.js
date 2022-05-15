import React from 'react'
import slide1 from '../images/slider (1).jpg'
import slide2 from '../images/slider (2).jpg'
import slide3 from '../images/slider (3).jpg'
import slide4 from '../images/slider (4).jpg'
import slide5 from '../images/slider (5).jpg'
import slide6 from '../images/slider (6).jpg'
import Slide from './Slide.js'

function UpperSlide () {
  return (
    <div id='testimonials'>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
        data-interval='3000'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={slide1}
              className='testimonial-img'
              alt='handicraft-pics'
            />
          </div>
          <Slide
            src={slide2}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={slide3}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={slide4}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={slide5}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={slide6}
            className='testimonial-img'
            alt='handicrft-pics'
          />
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon slide-button'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon slide-button'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}

export default UpperSlide
