import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className='descriptionbox-navigator'>
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box review">Review (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam voluptatibus expedita reprehenderit, veniam dicta? Accusantium quisquam facilis ducimus molestias quidem odio, nemo architecto exercitationem libero recusandae eos optio iste nam! Commodi reprehenderit qui laudantium recusandae repudiandae veritatis praesentium ipsum sequi, totam eos, laboriosam unde aliquid ullam vitae non? Sint!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis magnam aliquid, pariatur perferendis voluptatum blanditiis fugit iure ut fugiat cum deleniti error exercitationem illo vitae eveniet itaque veritatis enim iste repudiandae beatae. Nesciunt quasi accusantium sit accusamus, iusto sequi.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;