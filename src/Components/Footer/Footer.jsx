import React from 'react';
import '../Home/home.css';
import footer_logo from '../Assets/logo_big.png';
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={footer_logo} alt="Footer Logo" />
                    <p>SHOPPER</p>
                </div>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='footer-icons'>
                    <div><FaInstagram /></div>
                    <div><FaPinterest /></div>
                    <div><FaWhatsapp /></div>
                </div>
            </div>
            <hr />
            <div className='footer-copyright'>
                <p>Copyright @ 2023 - All right Reserved.</p>
            </div>

        </>
    )
}

export default Footer;