import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
// import productsFromFile from "../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import config from "../data/config.json";
import CartSumContext from "../store/CartSumContext";
import { useContext } from "react";

function Homepage() {
    const [dbProducts, setDbProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const categories = [...new Set(dbProducts.map(element => element.category))];
    const { t } = useTranslation();

    const cartSumCtx = useContext(CartSumContext);

    useEffect(() => {
        fetch(config.productsDbUrl)
        .then(res => res.json())                                  // .then(tagastus => tagastus.json())
        .then(json => {
            setProducts(json.slice());
            setDbProducts(json.slice());
        })                          // .then(andmed => console.log(andmed))
     
    }, []);

    const sortAZ = () => {
        products.sort((a, b) => a.name.localeCompare(b.name));
        setProducts(products.slice());
    }

    const sortZA = () => {
        products.sort((a, b) => b.name.localeCompare(a.name));
        setProducts(products.slice());
    }

    const sortPriceAsc = () => {
        products.sort((a, b) => a.price - b.price);
        setProducts(products.slice());
    }

    const sortPriceDesc = () => {
        products.sort((a, b) => b.price - a.price);
        setProducts(products.slice());
    }

    const filterByCategory = (categoryClicked) => {
        const result = dbProducts.filter(element => element.category === categoryClicked);
        setProducts(result);

    }

    const addToCart = (productClicked) => {
        let cartSS = sessionStorage.getItem("cart");
        cartSS = JSON.parse(cartSS) || [];
        const index = cartSS.findIndex(element => element.id === productClicked.id);
    if (index >= 0) {
        cartSS[index].quantity = cartSS[index].quantity + 1;
    } else {
        cartSS.push({"id": productClicked.id, "quantity": 1});
    }

    const cartWithProducts = cartSS.map(element => {
        const productFound = dbProducts.find(product => product.id === element.id);
        return productFound !== undefined ? {"product": productFound, "quantity": element.quantity} : undefined;
        }).filter(element => element !==undefined);

        let cartSum = 0

        cartWithProducts.forEach(element => cartSum = cartSum + element.product.price * element.quantity);

    cartSumCtx.setCartSum(cartSum.toFixed(2));




        cartSS = JSON.stringify(cartSS);
        sessionStorage.setItem("cart", cartSS);

        toast(t('🦄 Edukalt ') + productClicked.name + t("ostukorvi lisatud!"),{
        //toast('🦄 Edukalt ${productClicked.name} ostukorvi lisatud!',{
            position: "bottom-right",
            autoClose: 5000,
            theme: "dark",
            });

            
    }

    return ( 
    <div>
    <ToastContainer />
        {categories.map(element =>
        <Button key={element} onClick={() => filterByCategory(element)}>{t(element)}</Button>)}
        <div>{products.length} tk</div>
        <Button onClick={sortAZ}>Sorteeri A-Z</Button>
        <Button onClick={sortZA}>Sorteeri Z-A</Button>
        <Button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</Button>
        <Button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</Button>
        {products.map(element =>
            <div key={element.id}>
                <img src={element.image} alt="" />
                <div>{element.name}</div>
                <div>{element.price}</div>
                <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
            </div>)}
    </div> );
}

export default Homepage;