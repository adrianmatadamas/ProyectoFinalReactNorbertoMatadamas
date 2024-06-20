import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import ItemQuantitySelector from './ItemQuantitySelector.jsx';
import Description from './Description.jsx';
import AddItemButton from './AddItemButton.jsx';


const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
    addItem(item, quantity);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <img src={item.image} alt={item.name} />
      <Description description={item.description} />
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton handleAddItem={handleAddItem} />
    </div>
  );
};

export default ItemDetail;
