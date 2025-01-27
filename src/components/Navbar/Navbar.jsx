import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import fav from '../assets/favourite-icon.png'
import prof from '../assets/profile-icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu, setMenu] = React.useState("Home")
  return (
    <div className="navbar">
      <div className="logo">
        <img id="logo-icon" src={logo} sizes='' alt="logo" />
        <p>UNIQ PRINTZ</p>
      </div>
    
        <ul className="nav-items">
          <li onClick={()=>{setMenu('Home')}}><Link to='/'  style={{textDecoration:'none'}}>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("shop")}}><Link to='/shop'style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("contact")}}><Link to='/contactus'style={{textDecoration:'none'}}>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("orders")}}><Link to='/myorders'style={{textDecoration:'none'}}>My Orders</Link>{menu==="orders"?<hr/>:<></>}</li>
        </ul>
      <div className="login-cart-profile">
        
      <Link to='/cart'><img src={cart}width="32px" alt="cart" /></Link>
        <div className="login-cart-count">0</div>
        <Link to='/favourites'><img src={fav} width="32px" alt="favourite" /></Link>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/profile'><img src={prof} width="32px" alt="profile" /></Link>
        
      </div>
    </div>
  )
}

export default Navbar
