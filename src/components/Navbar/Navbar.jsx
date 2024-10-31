import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png";
import Search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logOut } from '../../firebase';


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="Navbar-left">
            <img src={Logo} alt="" />
            <ul>
                <li> Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse My Language</li>
            </ul>
        </div>


        <div className="navbar-right">
            <img src={Search} alt="icon" className='icons' />
            <p>Children</p>
            <img src={bell} alt="bell-icon" className='icons' />
            <div className='navbar-profile'>
                <img src={ profile_img} alt="" />
                <img src={caret_icon} alt="" />
                <div className='dropdown'>
                    <p onClick={()=> {logOut()}}>Sign Out of Greatflix</p>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar