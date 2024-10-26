import React from 'react'
import "./CSS/MainCompo.css"
import  { useState ,useEffect} from 'react';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';
import Header from './Header';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0 0 0 / 98%)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
    <Header />
    <div className='main-content'>
    <div className="app-container">
      <div className="sections">
        <Products addToCart={addToCart} />
      </div>
    </div>
    <div className='Sidebar'>
      <div className='semi' style={{marginTop:"110px"}}>
      <Cart cartItems={cartItems} />
      <Checkout cartItems={cartItems} />
      </div>
      </div></div>
    </>
  );
}

export default App;