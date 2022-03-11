import React from 'react'
function Card (props) {
  return (
    <div className='product-card-div'>
             <img
          src={props.img}
          className='product-card'
          style={{ verticalAlign: 'middle' }}
        />
      <div className='product-card-content'>{props.product}</div>
    </div>
  )
}
export default Card
