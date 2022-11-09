import { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import config from "../../data/config.json";

function MaintainProducts() {
    const [dbProducts, setDbProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const searchedProductRef = useRef();

    useEffect(() => {
        fetch(config.productsDbUrl)
        .then(res => res.json())                                 
        .then(json => {
            setProducts(json.slice());
            setDbProducts(json.slice());
        })                         
    }, []);

    const remove = (product) => {
    const index = dbProducts.findIndex(element => element.id === product.id);
    dbProducts.splice(index,1);
    fetch(config.productsDbUrl, {
        "method": "PUT",
        "body": JSON.stringify(dbProducts)
    }).then (() => {
    setProducts(dbProducts.slice());
    searchProducts();
    toast.error("Toode kustutatud");
})
}

    const searchProducts = () => {
      const result = dbProducts.filter(element =>
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