import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div>
      <div className="item">
        <img src={props.image} alt="item" />
        
          <p>{props.name}</p>
          <div className="item-price">
            <div className='new-price'>
            <p>₹{props.new_price}</p>
            </div>
            <div className='old-price'>
            <p>₹{props.old_price}</p>
            </div>
            <div className='size'>
              <p>size:</p>
            <p>{props.size}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Item
