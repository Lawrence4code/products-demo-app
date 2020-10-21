import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AddProductModal from '../add-product-modal/add-product-modal.component';

import {
  searchProduct,
  sortProducts,
} from './../../redux/products/products.actions';

const ProductFilter = () => {
  const [sortOrder] = useState('asc'); // setSortOrder is not used as descending order is not add to the functionality, can be easily added and enhanced later
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openAddProductModal = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const productSearchHandler = (e) => {
    dispatch(searchProduct(e.target.value.toLowerCase()));
  };

  const handleSortClick = (e) => {
    const payload = {
      sortBy: e.target.value,
      sortOrder,
    };
    dispatch(sortProducts(payload));
  };

  return (
    <div className="flex justify-end mx-6 relative">
      <button
        onClick={openAddProductModal}
        className="bg-green-500 hover:bg-green-700 text-white font py-1 px-2 border border-green-700 rounded mx-3"
      >
        Add Products
      </button>
      <input
        className="px-3 py-1 rounded mx-2"
        type="text"
        placeholder="Search products"
        onChange={productSearchHandler}
      />
      <select onChange={handleSortClick} className="px-3 py-1 rounded mx-2">
        <option default value="price">
          Price
        </option>
        <option value="quantity"> Quantity </option>
      </select>
      <AddProductModal
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </div>
  );
};

export default ProductFilter;
