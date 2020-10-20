import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setProducts } from './../../redux/products/products.actions';

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    dispatch(setProducts(items));
  }, [dispatch]);
  return (
    <div>
      {products.length > 0 ? (
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
      ) : (
        <p className="text-center mt-40">
          {' '}
          No products or No products based on your filters.{' '}
        </p>
      )}
    </div>
  );
};

export default ProductList;
