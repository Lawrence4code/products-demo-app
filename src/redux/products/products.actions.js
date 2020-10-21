import productsActionsTypes from './products.types';

export const setProducts = (products) => ({
  type: productsActionsTypes.SET_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: productsActionsTypes.ADD_PRODUCT,
  payload: product,
});

export const searchProduct = (searchTerm) => ({
  type: productsActionsTypes.SEARCH_PRODUCT,
  payload: searchTerm,
});

export const sortProducts = (payload) => ({
  type: productsActionsTypes.SORT_FILTERED_PRODUCTS,
  payload,
});
