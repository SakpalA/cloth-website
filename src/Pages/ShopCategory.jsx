import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContextProvider';
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../Components/Product/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={banner} alt="Banner" className='shopcategory-banner' />
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <RiArrowDropDownLine />
        </div>
      </div>
      <div className='shopcategory-poducts'>
        {all_product.map((item, i) => {
          if (category === item.category) {
            return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;