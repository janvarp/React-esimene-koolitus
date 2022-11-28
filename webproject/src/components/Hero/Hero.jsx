import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className='hero' id='home'>

      <div className="blur hero-blur"></div>
        <div className='left-h'>
          <Header/>

{/*the best ad*/}

          <div className="the-best-ad">
            <motion.div>
              initial={{left: mobile? "178px": '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type: 'tween'}}
            </motion.div>
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
            <span>
              <CountUp end={81} start={0} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <CountUp end={595} start={250} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <CountUp end={1127} start={1000} delay={4} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
          </div>

{/* her-buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Alusta</buttons>
            <buttons className="btn">Uuri veel</buttons>
          </div>
        </div>
      <div className='right-h'>
      <button className="btn">
          <Link to = 'join-us' smooth={true} spy={true}>
          Join Now
          </Link>
          </button>


        <motion.div
         initial={{right: '-1rem'}}
         whileInView={{right: '4rem'}}
         transition={transition}
         className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>bpm 116</span>
        </motion.div>

{/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
         initial={{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />

{/* calories */}
        <motion.div
         initial={{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transition}
         className="calories">
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero