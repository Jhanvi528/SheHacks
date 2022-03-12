import React from 'react'
import vocalforlocal from '../images/vocalforlocal.png'
function AboutUs () {
  return (
    <div id='aboutUs-section'>
      <div>
        <h1 className='about-us-title'>
          <span style={{ color: '#151965' }}>#VOCAL FOR </span>
          <span style={{ color: '#E43F5A' }}>LOCAL</span>
        </h1>
        <div className='about-us-content'>
          <p>
            Many of us still like to buy our stuffs from a nearby store. Nearby
            stores are the ones which can solve our problem to buy some stuff
            instantly without any hassles.
          </p>
          <p>
            What about if you have all the information about the items present
            in the stores near your house at your doorsteps? Yes we do that for
            you so that you do not waste your time in finding your required
            items by moving in and out of the stores. Our website provides you
            with the information about the different products which are being
            sold by your nearby stores. After keeping note of them, you may go
            to the specific store and buy the required product.
          </p>
          <p>
            As part of the Digital India movement, let’s encourage more of the
            local retailers and General Stores in our neighbourhoods to come
            online and digitally revolutionize the way they service their
            customers.
          </p>
        </div>
      </div>
      <div>
        <img src={vocalforlocal}></img>
      </div>
    </div>
  )
}

export default AboutUs
