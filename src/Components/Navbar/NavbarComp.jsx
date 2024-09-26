import React, { useContext } from 'react';
import logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { ShopContext } from '../../Context/ShopContextProvider';


const NavbarComp = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <>
      <Navbar expand="lg">
        <div className='container-fluid'>
          <Navbar.Brand to='/'>
            <img src={logo} alt="Brand logo" />
            <span>Shopper</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className='my-lg-0' navbarScroll>
              <NavLink className='nav-link' to='/'>Shop</NavLink>
              <NavLink className='nav-link' to='/men'>Men</NavLink>
              <NavLink className='nav-link' to='/women'>Women</NavLink>
              <NavLink className='nav-link' to='/kid'>Kids</NavLink>
            </Nav>
            <Nav>
              <NavLink className='nav-link' to='/login'><CiUser className='nav-icon' /></NavLink>
              <div className='cart'>
                <NavLink className='nav-link' to='/cart'><CiShoppingCart className='nav-icon'/></NavLink>
                <div className='cart-line-item'>{getTotalCartItems()}</div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default NavbarComp;