import React from 'react';
import './home.css';
import data_product from '../Assets/data';
import Item from '../Product/Item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <div className='popular-item'>
            {data_product.map((item, i) => {
                return <Item  
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular;