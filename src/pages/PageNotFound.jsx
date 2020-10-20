import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NotFoundPage = () => {
  return (
    <div className="page-not-found h-screen">
      <p className="page-not-found__title"> Opps, requested page not found!</p>
      <p className="page-not-found__message">
        Please click <Link className="text-blue-900" to="/">Here</Link> for Homepage.
      </p>
    </div>
  );
};

export default NotFoundPage;
