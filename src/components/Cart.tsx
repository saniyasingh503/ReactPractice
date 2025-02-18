import Product from "../models/Product";
import CartItem from "./CartItem";

interface CartProps {
    products: Product[];
  }

const Cart = ({products}: CartProps) => {
    
    return (
        <>
            {products.length>0 && products.map((product) => {
                return (
                    <CartItem key={product.id} quantity={3} product={product} />
                )
            })}
        </>

    )
}

export default Cart;