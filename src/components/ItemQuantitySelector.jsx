import React from 'react';


const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
