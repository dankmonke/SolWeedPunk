import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css'

const Navbar = () => {
    return (
        <div className ="solweedpunk__navbar">
            <div className="solweedpunk__navbar-links">
                <div classname="solweedpunk__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div> 
                    <div className="solweedpunk__navbar-links_container">
                    <p><a href="#home"</a></p>
                    <p><a href="#home"</a></p>
                    <p><a href="#home"</a></p>
                    <p><a href="#home"</a></p>
                    <p><a href="#home"</a></p>
                    </div>
            </div>
        </div>
    )
}

export default Navbar