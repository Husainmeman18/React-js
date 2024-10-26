import React from 'react';
import './CSS/MainCompo.css';

const Checkout = ({ cartItems }) => {
  // Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.price, 0); // Ensure price is treated as a number

  return (
    <div className="section checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to checkout.</p>
      ) : (
        <div>
          <h3>Total: ${total.toFixed(2)}</h3> {/* Format total to 2 decimal places */}
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
