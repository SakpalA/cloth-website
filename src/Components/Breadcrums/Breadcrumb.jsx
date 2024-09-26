import React from 'react';
import './Breadcrumb.css';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Breadcrum = ({product}) => {
  if(!product){
    return <div>Loading...</div>
  }

  return (
    <div className='breadcrumb'>
        HOME <IoIosArrowForward /> <NavLink to='/' className='shop'>SHOP</NavLink> <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    </div>
  )
}

export default Breadcrum;