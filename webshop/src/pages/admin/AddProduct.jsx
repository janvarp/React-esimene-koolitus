import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import config from "../../data/config.json"

function AddProduct() {
   
    const [message] = useState(""); 
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const pictureRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();
    const [dbProducts, setDbProducts] = useState([]);

    useEffect(() => {
        fetch(config.productsDbUrl)
        .then(res => res.json())                                 
        .then(json => setDbProducts(json.slice()));                        
    }, []);

const add = () => {     
const newProduct = {
    "id": Number(idRef.current.value),
    "name": nameRef.current.value,
    "price": Number(priceRef.current.value),
    "picture": pictureRef.current.value,
    "category": categoryRef.current.value,
    "description": descriptionRef.current.value,
    "active": activeRef.current.checked,
}
dbProducts.push(newProduct);
fetch(config.productsDbUrl, {
    "method": "PUT",
    "body": JSON.stringify(dbProducts)
}).then(() => {
    toast.success("Toode lisatud");
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    pictureRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false;
}) 
    
}

 

return (
    <div>
        <ToastContainer />
        <div>{message}</div>
        <label>ID</label>
        <input ref={idRef} type="text" /> <br />
        <label>Uue toote nimi</label> <br />
        <input ref={nameRef} type="text" /> <br />
        <label>Uue toote hind</label> <br />
        <input ref={priceRef} type="number" /> <br />
        <label>Uue toote pilt</label> <br />
        <input ref={pictureRef} type="text" /> <br />
        <label>Uue toote aktiivsus</label> <br />
        <input ref={categoryRef} type="text" /> <br />
        <label>Uue toote kategooria</label> <br />
        <input ref={descriptionRef} type="text" /> <br />
        <label>Uue toote sisu</label> <br />
        <input ref={activeRef} type="checkbox" /> <br />
        <button onClick={add}>Lisa uus toode</button>
    </div> );
}

export default AddProduct;