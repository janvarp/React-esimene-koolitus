import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function MaintainProducts() {
    const [products, setProducts] = useState(productsFromFile);
    const searchedProductRef = useRef();

    const remove = (product) => {
        const index = productsFromFile.findIndex(element => element.id === product.id);
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
    toast("Toode kustutatud");
}

    const searchProducts = () => {
      const result = productsFromFile.filter(element =>
         element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase())
         );
      setProducts(result);
}

    return ( 
    <div>
        <input ref={searchedProductRef} onChange={searchProducts} type="text" />
        <span>{products.length} tk</span>
        <ToastContainer />
        {products.map((element, index) =>
            <div key={index}>
                <img src={element.image} alt="" />
                <div>{element.name}</div>
                <div>{element.price}</div>
                <Link to={"/admin/edit/product/" + element.id}>
                </Link>
                <Button variant="warning">Muuda</Button>
                <Button variant="danger" onClick={() => remove(index)}>Kustuta</Button>
                </div>)}
        </div> );

} 
        
  


export default MaintainProducts;