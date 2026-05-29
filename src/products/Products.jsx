import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { prefetchDNS } from 'react-dom';

// 2. Main Parent Component
const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=10'
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  fetchProducts();
}, []);




 if(products)
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
  <div className="max-w-6xl mx-auto">     
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Featured Products</h1>
        <div className="grid  lg:grid-cols-4  gap-6">

          {products?.map((obj,ind) =>{
         return   <ProductCard key={ind} obj={obj} />
})}
        </div>
      </div>
      
    </div>
  );
};
export default Products;