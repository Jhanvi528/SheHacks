import React from 'react'
function Slide (props) {
  return <div className='carousel-item'>
    <img className={props.className} src={props.src} alt={props.alt} key={props.key} />
  </div>
}
export default Slide
