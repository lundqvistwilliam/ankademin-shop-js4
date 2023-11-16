import { Link } from "react-router-dom";
import { Product } from "../models/IProduct";

import '../App.css'
import '../ui/shopping-cart.css';

interface ShoppingCartProps {
  cart: Product[];
  removeFromCart?: (productId: number) => void;
}


const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart,removeFromCart }) => {
  const isCartEmpty = cart.length === 0;

  if (isCartEmpty) {
    return null;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="user-shopping-cart">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <Link to={`/api/products/${item.id}`} key={item.id}>
            {item.name} - {item.price}kr
            </Link>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};


export default ShoppingCart;
