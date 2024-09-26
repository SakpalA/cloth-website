import React, { useContext } from 'react';
import './ProductDisplay.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContextProvider';


const ProductDisplay = ({ product }) => {
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='product-display'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="Image 1" />
                    <img src={product.image} alt="Image 2" />
                    <img src={product.image} alt="Image 3" />
                    <img src={product.image} alt="Image 4" />
                </div>
                <div className='productdisplay-img'>
                    <img src={product.image} alt="Product Image" className='productdisplay-main-img' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStarHalfAlt className='star' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <h6 className='price-tax'>{product.tax}</h6>
                    <div className='prices'>
                        <p className="old-price">Rs{product.old_price}</p>
                        <p className="new-price">Rs{product.new_price}</p>
                    </div>
                </div>
                <div className='productdisplay-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit, dignissimos ipsum quod veritatis assumenda ea facilis ducimus, fugiat harum illum nemo est aut nisi?
                </div>
                <div className='productdisplay-right-size'>
                    <h5>Select Size</h5>
                    <div className='sizes'>
                        <div className='size'>XS</div>
                        <div className='size'>S</div>
                        <div className='size'>M</div>
                        <div className='size'>L</div>
                        <div className='size'>XL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
                <p className='category'><span>Catergory: </span>{product.category}</p>
            </div>
        </div>
    )
}

export default ProductDisplay;