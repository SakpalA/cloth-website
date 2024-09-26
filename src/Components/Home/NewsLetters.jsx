import React from 'react';
import './home.css';

const NewsLetters = () => {
  return (
    <div className='news-letters'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div className='subscribe'>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters;