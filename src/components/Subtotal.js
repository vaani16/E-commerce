import React from 'react';
import { useStateValue } from './StateProvider';
// import './Subtotal.css';

function Subtotal() {
  const [{ basket }] = useStateValue();

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>Rs. {calculateTotalPrice()}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
