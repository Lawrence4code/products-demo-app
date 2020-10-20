import productsActionsTypes from './products.types';

export const setProducts = (products) => ({
  type: productsActionsTypes.SET_PRODUCTS,
  payload: products,
});

export const setIsFetching = (bool) => ({
  type: productsActionsTypes.SET_PRODUCTS_IS_FETCHING,
  payload: bool,
});

export const setFetchError = (bool) => ({
  type: productsActionsTypes.SET_PRODUCTS_FETCH_ERROR,
  payload: bool,
});

export const addProduct = (product) => {
  return {
    type: productsActionsTypes.ADD_PRODUCT,
    payload: product,
  };
};


export const searchProduct = (searchTerm) => {
  return {
    type: productsActionsTypes.SEARCH_PRODUCT,
    payload: searchTerm
  }
}

export const sortProducts = (payload) => {
    return {
    type: productsActionsTypes.SORT_FILTERED_PRODUCTS,
    payload
  }
}