import React from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

import './add-product-modal.styles.css';

import { addProduct } from './../../redux/products/products.actions';

const AddProductModal = ({ showModal, closeModalHandler }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    errors,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    const payload = { ...data, id: uuid(), image: data.image[0] };
    dispatch(addProduct(payload));
    closeModalHandler();
    history.push('/products');
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Modal for adding new products"
      appElement={document.getElementById('root')}
      onRequestClose={closeModalHandler}
      className="add-product-modal"
      overlayClassName="add-product-modal-overlay"
    >
      <div className="flex flex-col ">
        <h3 className="text-2xl my-4">Add New Product</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-8/12 mx-auto"
        >
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="name"
                className="block text-blue-900 text-sm font-semibold px-1 mb-1"
              >
                Product Name:
              </label>
              {errors.name && (
                <p className="block text-red-400 text-xs font-semibold px-1">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <input
              className="w-full px-3 py-2 rounded  my-1"
              type="text"
              placeholder="Enter product name"
              ref={register({
                required: { value: true, message: '*Required field' },
                minLength: { value: 4, message: 'Mininum 4 letters please' },
                maxLength: {
                  value: 20,
                  message: 'Maximum 20 letters please',
                },
              })}
              name="name"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="description"
                className="block text-blue-900 text-sm font-semibold px-1 mb-1"
              >
                Product description:
              </label>
              {errors.description && (
                <p className="block text-red-400 text-xs font-semibold px-1">
                  {errors?.description?.message}
                </p>
              )}
            </div>
            <input
              className="w-full px-3 py-2 rounded  my-1"
              type="text"
              placeholder="Enter product description"
              ref={register({
                maxLength: {
                  value: 30,
                  message: 'Maximum 30 letters please',
                },
              })}
              name="description"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="price"
                className="block text-blue-900 text-sm font-semibold px-1 mb-1"
              >
                Product Price:
              </label>
              {errors.price && (
                <p className="block text-red-400 text-xs font-semibold px-1">
                  {errors?.price?.message}
                </p>
              )}
            </div>
            <input
              className="w-full px-3 py-2 rounded  my-1"
              type="number"
              placeholder="Enter product price"
              name="price"
              min="0"
              ref={register({
                required: { value: true, message: '*Required field' },
                pattern: {
                  value: /^(?:\d*\.\d{1,2}|\d+)$/,
                  message: 'Max 2 two decimals',
                },
              })}
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="quantity"
                className="block text-blue-900 text-sm font-semibold px-1 mb-1"
              >
                Product Quantity:
              </label>
              {errors.quantity && (
                <p className="block text-red-400 text-xs font-semibold px-1">
                  {errors?.quantity?.message}
                </p>
              )}
            </div>
            <input
              className="w-full px-3 py-2 rounded  my-1"
              type="number"
              placeholder="Enter product quanitity"
              name="quantity"
              min="0"
              step="1"
              ref={register({
                required: { value: true, message: '*Required field' },
                pattern: {
                  value: /^\d+$/,
                  message: 'Integers only, no decimals',
                },
              })}
            />
          </div>

          <div>
            <input
              className="px-3 py-2 rounded  my-2"
              type="file"
              ref={register}
              name="image"
              placeholder="Upload Image"
            />
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="bg-green-500 w-/4 hover:bg-green-700 text-white font py-1 px-3 border border-green-700 rounded mx-auto mt-6"
          >
            Add Product
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default AddProductModal;
