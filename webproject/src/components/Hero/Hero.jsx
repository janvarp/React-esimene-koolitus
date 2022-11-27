import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
          <Header/>

{/*the best ad*/}

          <div className="the-best-ad">
            <div></div>
            <span>eesti parim autofotograaf linnas</span>
          </div>

{/* Hero heading*/}
          <div className="hero-text">
          <div>
              <span className='stroke-text'>Capturing </span>
              <span>Your</span>
          </div>
            <div>
              <span>Automotive memories </span>
          </div>
            <div>
              <span>Siin lehel saad sa tutvuda minu tehtud piltidega ja vaadata ka inimeste arvamusi</span>
            </div>
          </div>

{/* figures */}
          <div className="figures">
            <div>
              <span>81</span>
              <span>posts</span>
            </div>
            <div>
              <span>595</span>
              <span>followers</span>
            </div>
            <div>
              <span>1127</span>
              <span>following</span>
            </div>
          </div>

{/* her-buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Alusta</buttons>
            <buttons className="btn">Uuri veel</buttons>
          </div>
        </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>


        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>bpm 116</span>
        </div>

{/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

{/* calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero