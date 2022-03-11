import React from 'react'
import ARTISAN1 from '../images/ARTISAN1.jpeg'
import AboutUsContent from '../AboutUsContent'
import SlideForAboutUs from './SlideForAboutUs.js'

function CreateNote (newNote) {
  return (
    <SlideForAboutUs src={newNote.img} key={newNote.id} story={newNote.story} />
  )
}
function AboutUs () {
  return (
    <div id='aboutUs-section'>
      <h1 className='about-us-title'>About us</h1>
      <h3 className='about-us-title'>
        Meet our
        <span style={{ fontFamily: 'Passions Conflict', fontSize: '3rem' }}>
          Artisans
        </span>
      </h3>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
        </ol>
        <div className='carousel-inner' style={{ width: '80%' }}>
          <div className='carousel-item active about-us'>
            <div style={{ float: 'left' }}>
              <img className='artisan-img' src={ARTISAN1} alt='artisan-img' />
            </div>
            <div className='about-us-content'>
              <p>
                The diminishing craft of Khavda pottery is still practiced by a
                handful of artisanal communities in this northern Kutch village.
                A wide variety of structures, from matkas, plates, diyas, to
                pots, bowls, and jugs, are made using mud––called “Rann ki
                Mitti”–– accrued from a neighbouring lake. While the men do the
                throwing of the terracotta, the women are in charge of the
                surface decoration including applying a thin layer of geru, a
                type of soil that gives the pots their earthy red colour, black
                and white stripes, and dots painted using natural substances.
              </p>
            </div>
          </div>
          {AboutUsContent.map(CreateNote)}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
