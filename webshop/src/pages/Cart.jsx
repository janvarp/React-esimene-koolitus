import { useEffect, useMemo, useState } from "react";
import config from "../data/config.json"
import styles from "../css/Cart.module.css";
import { Link } from "react-router-dom";
import ParcelMachines from "../components/ParcelMachines";
import Payment from "../components/Payment";
import CartSumContext from '../store/CartSumContext';
import { useContext } from "react";


function Cart() {
    const [cart, setCart] = useState( [] );
    const cartSS = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [], []);

    const cartSumCtx = useContext(CartSumContext);
    

    //uef
    useEffect(() => {
        fetch(config.productsDbUrl)
        .then(res => res.json())                                 
        .then(json => {
            const cartWithProducts = cartSS.map(element => {
            return {"product": json.find(product => product.id === element.id), quantity: element.quantity}
            }).filter(element => element !==undefined);
            setCart(cartWithProducts);
        }) 
        

        

    }, [cartSS]);

const removeFromCart = (productClicked) => {
    cartSS.splice(productClicked,1)
    cart.splice(productClicked,1); 
        console.log(cart);
        setCart(cart.slice()); 
        sessionStorage.setItem("cart", JSON.stringify(cartSS));

}



const calculateCartSum = () => {
    let cartsum = 0;
        cart.forEach(element => cartsum = cartsum + element.product.price * element.quantity);
        return cartsum.toFixed(2);

}

const decreaseQuantity =(productClicked) => {
    cartSS[productClicked].quantity = cartSS[productClicked].quantity - 1;
    cart[productClicked].quantity = cart[productClicked].quantity - 1;
    if (cartSS[productClicked].quantity <= 0) {
      removeFromCart(productClicked);
    } else {
      setCart(cart.slice());
      sessionStorage.setItem("cart", JSON.stringify(cartSS));
    }
    cartSumCtx.setCartSum(calculateCartSum());
}

const increaseQuantity =(productClicked) => {
    cartSS[productClicked].quantity = cartSS[productClicked].quantity + 1;
    cart[productClicked].quantity = cart[productClicked].quantity + 1;
    setCart(cart.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartSS));
    cartSumCtx.setCartSum(calculateCartSum());
}

const emptyCart = () => {
    setCart([]);
        sessionStorage.setItem("cart", JSON.stringify([]));
        cartSumCtx.setCartSum(0);
    
}



    return ( 
    <div>
        { cart.length > 0 && <div className={styles.cart__top}>
            <button onClick={emptyCart}>Tuhjenda</button>
            <div>Toodete koguarv {cart.length} tk</div>
        </div> }

        { cart.map((element, productClicked) =>
            <div key={productClicked} className={styles.product}>
                <img className={styles.image} src={element.product.image} alt="" />
                <div className={styles.name}>{element.product.name}</div>
                <div className={styles.price}>{element.product.price.toFixed(2)} $</div>
                <div className={styles.quantity}>
                    <img className={styles.button} onClick={() => decreaseQuantity(productClicked)} src={require("../images/minus.png")} alt="" />
                    <div>{element.quantity} tk</div>
                    <img className={styles.button} onClick={() => increaseQuantity(productClicked)} src={require("../images/plus.png")} alt="" />
                </div>
                <div className={styles.sum}>{(element.product.price * element.quantity).toFixed(2)} $</div>
                <img className={styles.button} onClick={() => removeFromCart(productClicked)} src={require("../images/remove.png")} alt="" />

        </div>)}
                
         {cart.length > 0 && <div className={styles.cart__bottom}>
            <ParcelMachines />

            <div>Kokku: {calculateCartSum()} €</div>
            <Payment sum={calculateCartSum()} />
        </div>}

        { cart.length === 0 && <div>Ostukorv on tuhi. <Link to="/">Tooteid valima</Link> </div> }

    </div>);

}

export default Cart;