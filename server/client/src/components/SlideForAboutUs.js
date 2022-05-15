import React from 'react'

function SlideForAboutUs (props) {
  return (
    <div className='carousel-item about-us'>
      <div style={{ float: 'left' }}>
        <img
          className='artisan-img'
          src={props.src}
          alt='artisan-img'
          key={props.key}
        />
      </div>
      <div className='about-us-content'>
        <p>
      {props.story}
        </p>
      </div>
    </div>
  )
}
export default SlideForAboutUs
