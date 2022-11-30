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
<a href='https://www.google.com'>
        <div className="picture-categories">
        {programsData.map((program, index)=>(
          
            <motion.div
            key={index}
            whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
            transition={{type: 'spring'}}

            className="category">
              
              <img src={program.image} alt='' />
              
            </motion.div>
            
            ))}
      </div>
      </a>
    </div>
    
  )
}

export default Pictures