import React from 'react';

const AddItemButton = ({ handleAddItem }) => {
  return <button onClick={handleAddItem}>Add to Cart</button>;
};

export default AddItemButton;
