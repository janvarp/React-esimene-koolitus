import React from 'react'

import './Pictures.css'
import { programsData } from '../../data/programsData'
import { motion } from "framer-motion";



const Pictures = () => {
  return (
    <div className="Pictures" id="pictures">
{/* header */}
        <div className="pictures-header">
            <span className='stroke-text'>Vaata minu</span>
            <span>Eelnevalt</span>
            <span className='stroke-text'>tehtud pilte</span>
        </div>

{/* lahtrid */}
        <div onClick='https://www.instagram.com/simplyjants/'  className="picture-categories">
        {programsData.map((program)=>(
            <motion.div
            whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
            transition={{type: 'spring'}}
            className="category">
              <img src={program.image} alt='' />
            
            </motion.div>
            ))}
      </div>
    </div>
    
  )
}

export default Pictures