import Product from "../models/Product";
import CartItem from "./CartItem";

const Cart = () => {
    const productData: Product[] = [{
        "id": 1,
        "name": "Addidas Shoe",
        "unitprice": 8000
    },
    {
        "id": 2,
        "name": "Puma Shoe",
        "unitprice": 7000
    }];
    return (
        <>
            {productData.map((product) => {
                return (
                    <CartItem key={product.id} quantity={3} product={product} />
                )
            })}
        </>

    )
}

export default Cart;