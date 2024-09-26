import React from 'react';
import './home.css';
import new_collections from '../Assets/new_collections';
import Item from '../Product/Item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <div className='new-items'>
            {new_collections.map((item,i) => {
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

export default NewCollection;