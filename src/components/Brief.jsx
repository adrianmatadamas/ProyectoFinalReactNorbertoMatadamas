import React from 'react';


const Brief = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Order Summary</h3>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} x {item.quantity} = ${item.price * item.quantity}</p>
        </div>
      ))}
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Brief;
