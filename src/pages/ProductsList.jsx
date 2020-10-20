import React from 'react';

import Header from './../components/header/header.component';
import ProductFilter from './../components/products-filter/product-filter.component';
import ProductList from './../components/products-list/product-list.component';

const ProductsList = () => {
  return (
    <div className="h-screen">
      <Header />
      <ProductFilter />
      <ProductList />
    </div>
  );
};

export default ProductsList;
