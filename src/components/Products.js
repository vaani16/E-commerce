

import "./Products.css"
import { useStateValue } from './StateProvider';
//import { Star } from '@mui/icons-material';

function Products({id,title,image,price,rating}) {
    const[,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })
    }
  return (
    <div className='Products'>
        <div className="Product_info">
        <p>{title}</p>
        <p className='products_price'>
            <small>Rs. </small>
            <strong>{price}</strong>
        </p>
      <div className="Products_rating">
        {
            Array(rating).fill().map((_,index)=>( <p key={index} className='products_star'>{'\u2605'}</p>))
        }
        </div>
        
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>

  );
}

export default Products
