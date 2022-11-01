import { useState, useRef } from "react";

function AddProduct() {
   
    const [message, changeMessage] = useState(""); 
    const nameRef = useRef();
    const priceRef = useRef();
    const pictureRef = useRef();
    const activeRef = useRef();

const add = () => {
    if (nameRef.current.value === '') {
changeMessage('Ei saa lisada ilma nimeta!');
    } else {
changeMessage('Lisatud:' + nameRef.current.value);
let productsLS = localStorage.getItem("products"); 
productsLS = JSON.parse(productsLS)  || [];        
const newProduct = {
    "name": nameRef.current.value,
    "price": Number(priceRef.current.value),
    "picture": pictureRef.current.value,
    "active": activeRef.current.checked,
}
productsLS.push(newProduct);
productsLS = JSON.stringify(productsLS);
localStorage.setItem("products", productsLS);
    }  

changeMessage("Lisatud!" + nameRef.current.value);   
}

return (
    <div>
        <div>{message}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nameRef} type="text" /> <br />
        <label>Uue toote hind</label> <br />
        <input ref={priceRef} type="number" /> <br />
        <label>Uue toote pilt</label> <br />
        <input ref={pictureRef} type="text" /> <br />
        <label>Uue toote aktiivsus</label> <br />
        <input ref={activeRef} type="checkbox" /> <br />
        <button onClick={add}>Lisa uus toode</button>
    </div> );
}

export default AddProduct;