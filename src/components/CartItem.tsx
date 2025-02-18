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
                <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" />
                <h3>{product.name}</h3>
            </div>
            <div className="cartItem_right">
                <p>Quantity : {quantity}</p>
                <p>Rs. {product.unitprice}</p>
            </div>
        </div>
    )
}