import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="pictures-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>OLED VALMIS</span>
            <span style={{color: 'white'}}>ASTUMA</span>
            <span className='stroke-text'>KAAMERA ETTE?</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i) =>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price} €</span>

                    <div className="features">
                        {plan.features.map((feature, ix) =>(
                            <div className="feature" key={ix}>
                                <img src={whiteTick} alt='' />
                                <span key={ix}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>Vaata rohkem eeliseid</span>
                    </div>
                    <button className="btn">Liitu siin</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans