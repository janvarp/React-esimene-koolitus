import React from 'react'
import './Pictures.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Pictures = () => {
  return (
    <div className="Pictures" id="pictures">
{/* header */}
        <div className="pictures-header">
            <span className='stroke-text'>Vaata minu</span>
            <span>Eelnevalt</span>
            <span className='stroke-text'>Tehtud pilte</span>
        </div>

        <div className="picture-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join now</span>
                        <img src={RightArrow} alt=''></img>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Pictures