import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="section cart" style={{ marginBottom: "25px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.title}</span>
            {/* Ensure price is displayed correctly */}
            <span>${typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price).toFixed(2)}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
