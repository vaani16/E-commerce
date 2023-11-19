import React from 'react'
import logo from './images/logo.png'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';



function Header() {
  const[{basket}]=useStateValue();

  return <nav className="Header">
    <Link to="/">
    <img src={logo} alt="shopping bag logo" className="Header_logo" />
    </Link>
       
       
    <h1 className="Header_title">Shopful</h1>

    <div className="Header_search">
    <input type='text' className='Header_searchInput'/>
    <SearchIcon className='Header_searchIcon'/>
    </div>

    <div className="Header_nav">
     
      <Link to="/login" className="Header_link" >
        <div className="Header_option">
            <span className='Header_optionLineOne'>Hello Vaani</span>
            <span className='Header_optionLineTwo'>Sign In</span>
        </div>
        </Link>


        <Link to="/" className="Header_link" >
        <div className="Header_option">
            <span className='Header_optionLineOne'>Returns </span>
            <span className='Header_optionLineTwo'>& Orders</span>
        </div>
        </Link>
        

        <Link to="/" className="Header_link" >
        <div className="Header_option">
            <span className='Header_optionLineOne'>Your </span>
            <span className='Header_optionLineTwo'>Prime</span>
        </div>
        </Link>

        <Link to="/checkout" className="Header_link">
            <div className="Header_optionBasket">
                <ShoppingBasketIcon/>
                <span className='Header_optionLineTwo Header_basketCount'>{basket?.length}</span>
            </div>
        </Link>

    </div>

  </nav>
}

export default Header
