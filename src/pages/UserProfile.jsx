import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/header.component';
import { NavLink } from 'react-router-dom';

import AddProductModal from '../components/add-product-modal/add-product-modal.component';

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state) => state.products.filteredItems);

  const openAddProductModal = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="w-6/12 h-8/12 p-10 m-auto bg-gray-100 bg-opacity-50 mt-40 text-center">
        <h3 className="text-2xl my-4"> User Profile </h3>
        <p> User: {user.name} </p>
        <p> Email Address: {user.email} </p>
        <p> Total Products: {products.length} </p>
        <div className="mt-10">
          <button
            onClick={openAddProductModal}
            className="bg-green-500 hover:bg-green-700 text-white font py-1 px-2 border border-green-700 rounded mx-3"
          >
            Add Products
          </button>
          <NavLink
            to="/products"
            className="bg-blue-500 hover:bg-blue-700 text-white font py-2 px-2 border border-blue-700 rounded mx-3"
          >
            View Products
          </NavLink>
        </div>
      </div>
      <AddProductModal
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </div>
  );
};

export default UserProfile;
