import React from 'react'
import { useStateValue } from './StateProvider'
import "./CheckoutProducts.css"


function CheckoutProducts({id,title,image,price,rating}) {
  const[,dispatch]=useStateValue();

  const RemoveFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    });
  }
  return (
    <div className="checkoutproducts">
        <img className='checkoutproducts_image' src={image} alt="" />
        <div className="checkoutproducts_info">
            <p className="checkoutproducts_title">{title}</p>
            <p className="checkoutproducts_price"><small>Rs. </small>
            <strong>{price}</strong></p>
            <div className="checkoutproducts_rating">
            {
            Array(rating).fill().map((_,index)=>(<p key={index} className='products_star'>{'\u2605'}</p>))
        }
            </div>
            <button onClick={RemoveFromBasket}>Remove From Basket</button>
        </div>
    </div>

  )
}

export default CheckoutProducts
