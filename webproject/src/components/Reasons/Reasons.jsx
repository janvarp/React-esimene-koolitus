import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>põhjused</span>

            <div>
                <span className='stroke-text'>miks</span>
                <span> valida mind?</span>
            </div>

            <div className='details-r'>
            <div>
              <img src={tick} alt="" />
              <span>kõige</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>paremad</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>hinnad</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>eestis</span>
            </div>
          </div>
          <span style={{
            color : 'var(--gray)', fontWeight: 'normal',
            }}
            >SPONSORID:
            </span>

            <div className="partner">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
      </div>
  </div>
  )
}

export default Reasons