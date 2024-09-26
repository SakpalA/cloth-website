import React from 'react';
import '../Home/home.css';
import { Link } from 'react-router-dom';

const Item = ({ image, name, new_price, old_price, id }) => {
    return (
        <>
            <div className='item'>
                <div className='item-wishlist'>
                <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="Product" className='item-img' /></Link>
                </div>
                <div className='item-text'>
                    <p className='item-name'>{name}</p>
                    <div className='item-prices'>
                        <p className='item-price-old'>Rs.{old_price}</p>
                        <p className='item-price-new'>Rs.{new_price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;