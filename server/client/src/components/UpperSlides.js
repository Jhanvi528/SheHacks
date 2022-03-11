import React from 'react'
import upperslide_1 from '../images/upperslide_1.jpg'
import upperslide_2 from '../images/upperslide_2.jpg'
import upperslide_3 from '../images/upperslide_3.jpg'
import upperslide_4 from '../images/upperslide_4.jpg'
import upperslide_5 from '../images/upperslide_5.jpg'
import upperslide_6 from '../images/upperslide_6.jpg'
import Slide from './Slide.js'

function UpperSlide () {
  return (
    <div id='testimonials'>
      <div id='carouselExampleControls' className='carousel slide' data-ride='carousel' data-interval="3000">
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={upperslide_1}
              className='testimonial-img'
              alt='handicraft-pics'
            />
          </div>
          <Slide
            src={upperslide_2}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={upperslide_3}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={upperslide_4}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={upperslide_5}
            className='testimonial-img'
            alt='handicrft-pics'
          />
          <Slide
            src={upperslide_6}
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
