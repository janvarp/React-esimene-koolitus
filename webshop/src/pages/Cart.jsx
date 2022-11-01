import { useState } from "react";

function Cart() {
    const [cart, updateCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

const removeFromCart = (productClicked) => {
    cart.splice(productClicked,1); 
        console.log(cart);
        updateCart(cart.slice()); 
        localStorage.setItem("cart", JSON.stringify(cart));

}

const addToCart = (productClicked) => {
    cart.push(productClicked);
    updateCart(cart.slice()); 
    localStorage.setItem("cart", JSON.stringify(cart));
}

const calculateCartSum = () => {
    let cartsum = 0;
        cart.forEach(element => cartsum = cartsum + element.price);
        return cartsum;

}

const emptyCart = () => {
    updateCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    
}

    return ( 
    <div>
    {cart.length === 0 && <div>Cart is empty!</div>}
        { cart.length > 0 && <div>{ostukorv.length} products in cart</div>}
        { cart.length > 0 && <button onClick={emptyCart}>Empty</button>}
        {cart.map((element, productClicked) =>
            <div key={productClicked}>
                {element}
                <button onClick={() => removeFromCart(productClicked)}>x</button>
                <button onClick={() => addToCart(element)}>Add</button>
            </div>)}
            <div>Wholesum: {calculateCartSum()} €</div>
    </div>
     );
}

export default Cart;