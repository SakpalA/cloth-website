import React from 'react';
import './home.css';
import hand from '../Assets/hand_icon.png';
import hero from '../Assets/hero_image.png';
import { FaLongArrowAltRight } from "react-icons/fa";


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div className='hero-para'>
                    <div className='hero-hand'>
                        <p>new</p>
                        <img src={hand} alt="Hand" className='hand'/>
                    </div>
                    <p>collections <br />for everyone</p>
                </div>
                <button className='hero-btn'>Latest Collection <FaLongArrowAltRight />
</button>
            </div>
            <div className='hero-right'>
                <img src={hero} alt="Hero Image" className='hero-img'/>
            </div>
        </div>
    )
}

export default Hero;