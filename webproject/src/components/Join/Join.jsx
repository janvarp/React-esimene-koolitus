import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

    const handleJoin = (e)=> {
        e.preventDefault()
        emailjs.sendForm(
            'service_pze6n0b',
            'template_t12dm9a',
            form.current,
            'JpTroOHsnxYq0UtNn'
        )
        .then((result)=>{
            console.log('done')
        },
        (error)=>{
            console.log(error)
        }
        )
    }
  return (
   <div className="Join" id='join-us'>
    <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>Siit saad</span>
            <span>Saata</span></div>
        <div>
            <span>Mulle</span>
            <span className='stroke-text'>Emaili</span>
        </div>
    </div>
    <div className="right-j">
        <form className="email-container" ref={form} onSubmit={handleJoin}>
            <input type="email" name='user_email' placeholder='Sisesta oma email...'/>
            <button type='submit' className="btn btn-j">Saada</button>
        </form>
    </div>
   </div>
  )
}

export default Join