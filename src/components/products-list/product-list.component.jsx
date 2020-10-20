import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredItems);
  return (
    <table className="w-11/12 mt-10 mx-auto text-center">
      <thead>
        <tr>
          <th> Product </th>
          <th> Description </th>
          <th> Quantity </th>
          <th> Price </th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td> {product.name} </td>
            <td> {product.description} </td>
            <td> {product.quantity} </td>
            <td> {product.price} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
