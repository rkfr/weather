import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="error">
    <p className="error__message">
      Error: Something went wrong.
    </p>
    <Link
      className="error__link"
      to="/"
    >
      Go to Homepage
    </Link>
  </div>
);

export default ErrorPage;
