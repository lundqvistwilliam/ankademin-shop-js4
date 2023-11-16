import React from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../models/IProduct';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';


interface ProductItemProps {
  product: Product;
  addToShoppingCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isItemInCart: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToShoppingCart, removeFromCart, isItemInCart }) => (
  <div className="grid-item" key={product.id}>
    <Link to={`/api/products/${product.id}`}>
      <div className="product-item">
        <h2>{product.name}</h2>
        <p><b>{product.price}kr</b></p>
        <img src={product.image} alt={product.name} className="productImage" />
      </div>
    </Link>
    <div className="buttonDiv">
      <Button className="buy-button" label="Buy" onClick={() => {}} />
      <Button
        className="cart-button"
        label={isItemInCart ? 'Remove from cart' : 'Add to cart'}
        onClick={() => (isItemInCart ? removeFromCart(product.id) : addToShoppingCart(product))}
        icon={isItemInCart ? <FontAwesomeIcon icon={faTrash} /> : <FontAwesomeIcon icon={faCartShopping} />}
      />
    </div>
  </div>
);

export default ProductItem;