import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { Product } from "./models/IProduct";
import { Navbar } from "./components/layout/Navbar";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackward} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import './ui/product-details.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => {
      console.error('Error fetching product details:', error);
    });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return(
    <>
    <Navbar/>
    <Link to="/">
    <button className="return-button">
      <FontAwesomeIcon icon={faBackward} /> Return
    </button>
    </Link>
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} id="product-detail-image" />
      <p>{product.description}</p>
      <p>In stock: {product.inStock}</p>
      {product.inStock === 0 ? (
        <button className="buy-button" style={{ backgroundColor: 'red' }} disabled>
          Out of stock
        </button>
      ) : (
        <button className="buy-button">Buy</button>
      )}
    </div>
    </>
  );
}

export default ProductDetail;