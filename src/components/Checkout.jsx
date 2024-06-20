import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import Brief from './Brief.jsx';


const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    emailConfirmation: ''
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (order.email !== order.emailConfirmation) {
      alert("Emails do not match!");
      return;
    }
    const orderData = {
      ...order,
      items: cartItems,
      date: serverTimestamp(),
      status: 'generated'
    };
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    setOrderId(docRef.id);
    clearCart();
  };

  return (
    <div>
      {orderId ? (
        <div>
          <h2>Thank you for your purchase!</h2>
          <p>Your order ID is: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Name" value={order.name} onChange={handleInputChange} required />
          <input name="surname" type="text" placeholder="Surname" value={order.surname} onChange={handleInputChange} required />
          <input name="phone" type="text" placeholder="Phone" value={order.phone} onChange={handleInputChange} required />
          <input name="email" type="email" placeholder="Email" value={order.email} onChange={handleInputChange} required />
          <input name="emailConfirmation" type="email" placeholder="Confirm Email" value={order.emailConfirmation} onChange={handleInputChange} required />
          <button type="submit" disabled={cartItems.length === 0}>Place Order</button>
        </form>
      )}
      <Brief cartItems={cartItems} />
    </div>
  );
};

export default Checkout;
