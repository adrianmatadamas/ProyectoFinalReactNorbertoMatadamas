import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';


const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories/category1">Category 1</Link>
      <Link to="/categories/category2">Category 2</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
