import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';



function AboutUs() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = () => {
        const params = {
            to_name: 'Veebilehe omanik',
            from_name: nameRef.current.value + `(Tema e-mail: ${emailRef.current.value} )`,
            message: messageRef.current.value
        };
         
        emailjs.send('service_pze6n0b', 'template_t12dm9a', params, 'JpTroOHsnxYq0UtNn')
        .then((result) => {
            toast.success("EMail on edukalt saadetud!")
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
            console.log(result.text);
        }, (error) => {
            toast.error(error.text);
            console.log(error.text);
        });
    };

    return ( 
    <div>
        <ToastContainer />
        <div>Saada meile tagasiside</div>
        <label>Sinu nimi</label>
        <input ref={nameRef} type="text" /> <br />
        <label>Sinu e-mail</label>
        <input ref={emailRef} type="text" /> <br />
        <label>Sinu tagasiside</label>
        <input ref={messageRef} type="text" /> <br />
        <button onClick={sendEmail}>Send email</button>
    </div> );
}

export default AboutUs;