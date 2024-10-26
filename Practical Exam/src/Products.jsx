import React, { useEffect, useState } from 'react';
import './CSS/MainCompo.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="main-pro">
      
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <span className="product-name">{product.title}</span>
          <span className="product-price">${product.price}</span>
          <button onClick={() => addToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div> 
      ))}
      </div>
    </div>
  );
};

export default Products;
