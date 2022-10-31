import { useState } from "react";
import productsFromFile from "../../data/products.json";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function MaintainProducts() {
    const [products, setProducts] = useState(productsFromFile);

    const remove = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
    toast("Toode kustutatud");
}

    return ( 
    <div>
        <ToastContainer />
        {products.map((element, index) =>
            <div key={index}>
                <Link to={"/admin/edit/product/" + element.id}>
                <img src={element.image} alt="" />
                <div>{element.name}</div>
                <div>{element.price}</div>
                <Button variant="warning">Muuda</Button>
                </Link>
                <Button variant="danger" onClick={() => remove(index)}>Kustuta</Button>
                </div>)}
        </div> );

} 
        
  


export default MaintainProducts;