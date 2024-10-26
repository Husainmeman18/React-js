import React from 'react';
import './CSS/MainCompo.css';
import SignOut from './Signout';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>E-Shop</h1>
      </div>
      <nav className="header-nav">
      <SignOut/>
        <a href="#products">Products</a>
        <a href="#cart">Cart</a>
        <a href="#checkout">Checkout</a>
      </nav>
    </header>
  );
};

export default Header;
