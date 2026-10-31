import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <div>
        <Link to="/Products/Women">Women</Link>
      </div>
      <div>
        <Link to="/Products/Kids">Kids</Link>
      </div>
      <div>
        <Link to="/Products/Mens">Mens</Link>
      </div>
      <h1> Products </h1>
    </div>
  );
};

export default Products;
