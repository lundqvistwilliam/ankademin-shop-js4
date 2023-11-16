import {  useState } from 'react';
import './App.css';
import { Product } from './models/IProduct';

import ProductsFetch from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { Navbar } from './components/layout/Navbar';

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <>
      <Navbar/>
      <ShoppingCart cart={cart} />
      <ProductsFetch setCart={setCart}/>
    </>
  );
}

export default App;
