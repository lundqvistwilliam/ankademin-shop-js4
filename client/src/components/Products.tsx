import { useState,useEffect } from "react";

import { Product } from '../models/IProduct';
import ProductItem from "./ProductItem";

import '../App.css'
import '../ui/buttons.css'
import '../ui/grid-styles.css'

interface ProductsFetchProps {
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductsFetch: React.FC<ProductsFetchProps> = ({ setCart }) => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [cart, setLocalCart] = useState<Product[]>([]); 

   const addToShoppingCart = (product: Product) => {
     setLocalCart((prevCart) => [...prevCart, product]);
     setCart((prevCart) => [...prevCart, product]);

     localStorage.setItem('shoppingCart', JSON.stringify([...cart, product]));
   };

   const removeFromCart = (productId: number) => {
     const updatedLocalCart = cart.filter((item) => item.id !== productId);
     setLocalCart(updatedLocalCart);
     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
     saveToLocalStorage(updatedLocalCart)
   };

   const saveToLocalStorage = (updatedCart: Product[]) => {
     localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
   }


  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setLocalCart(parsedCart);
      setCart(parsedCart);
    }

    fetch('/api/products')
      .then(response => response.json())
      .then((data: { products: Product[] }) => {
        setProductsData(data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
  <>
    <h2>Products</h2>
    <div>
      <div className="grid-container">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToShoppingCart={addToShoppingCart}
            removeFromCart={removeFromCart}
            isItemInCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  </>
);
}

export default ProductsFetch;
