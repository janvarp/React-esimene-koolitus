import { useEffect, useMemo, useState } from "react";
import productsFromFile from "../data/products.json"

function Cart() {
    const [cart, setCart] = useState( [] );
    const cartSS = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [], []);

    //uef
    useEffect(() => {
        const cartWithProducts = cartSS.map(element => {
            return {"product": productsFromFile.find(product => product.id === element.id), quantity: element.quantity}
        });
        setCart(cartWithProducts);
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

    return ( 
    <div>
    {cart.length === 0 && <div>Cart is empty!</div>}
        { cart.length > 0 && <div>{cart.length} products in cart</div>}
        { cart.length > 0 && <button onClick={emptyCart}>Empty</button>}
        {cart.map((element, productClicked) =>
            <div key={productClicked}>
                <img src={element.product.image} alt="" />
                <div>{element.product.name}</div>
                <button onClick={() => decreaseQuantity(productClicked)} >-</button>
                <div>{element.quantity}</div>
                <button onClick={() => increaseQuantity(productClicked)} >+</button>
                <div>{(element.product.price * element.quantity).toFixed(2)}</div>
                <button onClick={() => removeFromCart(productClicked)}>x</button>
                
            </div>)}
            <div>Wholesum: {calculateCartSum()} €</div>
    </div>
     );
}

export default Cart;