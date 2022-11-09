import { useParams } from "react-router-dom";

function SingleProduct() {
    const { number } = useParams();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = products[number];


    return ( 
    <div>
        {foundProduct !== undefined && 
        <div>
        <div>{foundProduct.name}</div>
        <div>{foundProduct.price}</div>
        <img src={foundProduct.picture} alt="" />
        <div>{foundProduct.active + 0}</div>
        </div>
        }
        {foundProduct === undefined && <div>Product couldn't be found</div> }
        </div> );
}

export default SingleProduct;


// teha editproducti járgi