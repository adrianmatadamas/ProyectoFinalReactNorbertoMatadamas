import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';


const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </div>
  );
};

export default CartWidget;
