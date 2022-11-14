import { useEffect, useMemo, useState } from "react";
import config from "../data/config.json"
import styles from "../css/Cart.module.css";

function Cart() {
    const [cart, setCart] = useState( [] );
    const cartSS = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [], []);
    const [parcelMachines, setParcelMachines] = useState([]);

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
        

        fetch("https://www.omniva.ee/locations.json")
        .then(res => res.json())
        .then(json => setParcelMachines(json))

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
}

const increaseQuantity =(productClicked) => {
    cartSS[productClicked].quantity = cartSS[productClicked].quantity + 1;
    cart[productClicked].quantity = cart[productClicked].quantity + 1;
    setCart(cart.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartSS));
}

const emptyCart = () => {
    setCart([]);
        sessionStorage.setItem("cart", JSON.stringify([]));
    
}

const pay = () => {
    // enne maksma hakkamist ma salvestan tellimuse andmebaasi

    const paymentData = {
            "api_username": "92ddcfab96e34a5f",         // kasutajanimi, mis peab uhtima headersis oleva kasutajanimega
            "account_name": "EUR3D1",       // konto nimi
            "amount": calculateCartSum(),              // kogusumma
            "order_reference": Math.random()*999999,   // tellimuse nr, error kui see tellimuse nr on juba tasutud
            "nonce": "a9124858oihhloltere902" + Math.random()*999999 + new Date(),      // turvaelement, iga p'ring peab olmea unikaalne
            "timestamp": new Date(),       // turvaelement, ajatempel
            "customer_url": "https://nepla.web.app"         // aadress, kuhu teda hiljem tagasi suunatakse
    }
    const headersData = {
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
        "Content-Type": "application/json"
    }
    fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
        "method": "POST",
        "body": JSON.stringify(paymentData),
        "headers": headersData
    }).then(res => res.json())
      .then(json => window.location.href = json.payment_link)
}

    return ( 
    <div>
        <div className={styles.cart__top}>
            <button onClick={emptyCart}>Tuhjenda</button>
            <div>Toodete koguarv {cart.length} tk</div>
        </div>

        {cart.map((element, productClicked) =>
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
                
            <div className={styles.cart__bottom}>
            <select>
                {parcelMachines
                .filter(element => element.A0_NAME === "EE" && element.ZIP !== "96331")
                .map(element =>
                 <option>{element.NAME}</option>)}
            </select>

            <div>Kokku: {calculateCartSum()} €</div>
            <button onClick={pay}>Maksma</button>
        </div>

    </div>);

}

export default Cart;