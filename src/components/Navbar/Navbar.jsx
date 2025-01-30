import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import prof from '../assets/profile-icon.png'
import { Link } from 'react-router-dom'
import homo from '../assets/home_icon.png'
import shopo from '../assets/store-icon.png'
import oro from '../assets/orders-icon.png'
import ser from '../assets/search.png'
const Navbar = () => {
  const[menu, setMenu] = React.useState("Home")
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img id="logo-icon" src={logo} sizes='' alt="logo" />
        <p>UNIQ PRINTZ</p>

      </div>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          
        />
        <button type="submit" className="search-button">
          <img src={ser}alt='search' width="30px">
          </img></button>
      </form>
    
        <ul className="nav-items">
          <li onClick={()=>{setMenu('Home')}}><Link to='/'  style={{textDecoration:'none'}}><img src={homo} width="28px" alt="home"></img></Link>{menu==="Home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("shop")}}><Link to='/shop'style={{textDecoration:'none'}}><img src={shopo} width="32px" alt="shop"></img></Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("orders")}}><Link to='/myorders'style={{textDecoration:'none'}}><img src={oro} width="32px" alt="order"></img></Link>{menu==="orders"?<hr/>:<></>}</li>
        </ul>

       

      <div className="login-cart-profile">
        
      <Link to='/cart'><img src={cart}width="32px" alt="cart" /></Link>
        <div className="login-cart-count">0</div>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/profile'><img src={prof} width="32px" alt="profile" /></Link>
        
      </div>
    </div>
  )
}

export default Navbar
