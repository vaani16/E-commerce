import React from 'react'
import { useStateValue } from './StateProvider'
import "./CheckOut.css"
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';

function CheckOut() {
    const[{basket}]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
      <img src="https://images.unsplash.com/photo-1542992015-8b34590ec327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=402&q=80" alt="" className="checkout_ad" />
       {basket.length===0?(
        <div>
            <h2>Your Shoppping Basket is empty.</h2>
            <p>Add your favourite products to the cart by clicking "Add to Basket"</p>
        </div>
       ):(
        <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProducts
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
            
            </div>
       )}
       </div>
       {basket.length>0 && (
        <div className='checkout_right'>
           <Subtotal/>
           </div>
       )}
    </div>
      
  
  )
}

export default CheckOut
