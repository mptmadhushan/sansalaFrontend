import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cr.png'
import { Link } from 'react-router-dom'
import nav_dropdown from '../Assets/dropdown_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () =>{

    const [menu,setMenu] = useState("Home")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return(
        <div className= 'navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
            <ul ref={menuRef}className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("ourguide")}}><Link style={{ textDecoration: 'none'}} to='/ourguide'>Our Guide</Link>{menu==="ourguide"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("aboutus")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("mycart")}}><Link style={{ textDecoration: 'none'}} to='/cart'>My Cart</Link>{menu==="cart"?<h/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
               <Link to='/Cart'><img src={cart} alt="" /></Link>
               <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar