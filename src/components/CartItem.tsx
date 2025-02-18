import Product from "../models/Product";
import './CartItem.css';

interface CartItemProps {
    product: Product;
    quantity: number;
}

export default function CartItem({ product, quantity }: CartItemProps) {
    return (
        <div className="cartItem_wrapper">
            <div className="cartItem_left">
                <img src={product.image} alt="productImage" />
                <h3>{product.title}</h3>
            </div>
            <div className="cartItem_right">
                <p>Quantity : {quantity}</p>
                <p>Rs. {product.price}</p>
            </div>
        </div>
    )
}